const fs = require("fs");

const { validationResult } = require("express-validator");
const mongoose = require("mongoose");

const HttpError = require("../models/http-error");
const getCoordsForAddress = require("../util/location");
const Place = require("../models/place");
const User = require("../models/user");

exports.getPlaceById = async (req, res, next) => {
  const { pid } = req.params;

  let place;
  try {
    place = await Place.findById(pid);
  } catch (err) {
    return next(
      new HttpError("Something went wrong, could not find a place.", 500)
    );
  }

  if (!place) {
    return next(
      new HttpError("Could not find a place for the provided place id.", 404)
    );
  }

  res.json({ place: place.toObject({ getters: true }) });
};

exports.getPlacesByUserId = async (req, res, next) => {
  const userId = req.params.uid;

  // let places;
  let user;
  try {
    user = await User.findById(userId).populate("places");
    // places = await Place.find({ creator: userId });
  } catch (err) {
    return next(
      new HttpError("Fetching places failed, please try again later.", 500)
    );
  }

  // if (!places || places.length === 0) {
  if (!user) {
    return next(
      new HttpError("Could not user with the provided user id.", 404)
    );
  }

  res.json({ places: user.places.map((p) => p.toObject({ getters: true })) });
};

exports.createPlace = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(new HttpError(errors.errors[0].msg, 422));
  }

  const { title, description, address } = req.body;

  let coordinates;
  try {
    coordinates = await getCoordsForAddress(address);
  } catch (error) {
    return next(error);
  }

  const createdPlace = new Place({
    title,
    description,
    image: req.file.path,
    location: coordinates,
    address,
    creator: req.userData.userId,
  });

  let user;

  try {
    user = await User.findById(req.userData.userId);
  } catch (err) {
    const error = new HttpError(
      "Creating place failed, please try again.",
      500
    );
    return next(error);
  }

  if (!user)
    return next(new HttpError("Could not find user for provided id", 404));

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await createdPlace.save({ session: sess });
    user.places.push(createdPlace);
    await user.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    return next(new HttpError("Creating place failed, please try again.", 500));
  }

  res.status(201).json({ place: createdPlace.toObject({ getters: true }) });
};

exports.updatePlace = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(new HttpError(errors.errors[0].msg, 422));
  }

  const { pid: placeId } = req.params;
  const { title, description } = req.body;

  let updatedPlace;
  try {
    updatedPlace = await Place.findById(placeId);
  } catch (err) {
    return next(new HttpError("Updating place failed!", 500));
  }

  if (!updatedPlace) {
    return next(
      new HttpError("Could not update place with provided place id.", 404)
    );
  }

  if (updatedPlace.creator.toString() !== req.userData.userId)
    return next(new HttpError("You aren't allowed to edit this place!", 401));

  updatedPlace.title = title;
  updatedPlace.description = description;
  try {
    await updatedPlace.save();
  } catch (err) {
    return next(new HttpError("Saving updates to place failed!", 500));
  }

  res.status(200).json({ place: updatedPlace.toObject({ getters: true }) });
};

exports.deletePlace = async (req, res, next) => {
  const placeId = req.params.pid;

  let place;
  try {
    place = await Place.findById(placeId).populate("creator");
  } catch (err) {
    return next(new HttpError("Deleting place failed!", 500));
  }

  if (!place)
    return next(
      new HttpError("Could not find a place with that id to delete!", 404)
    );

  if (place.creator.id !== req.userData.userId)
    return next(new HttpError("You aren't allowed to delete this place!", 401));

  const imagePath = place.image;

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await place.remove({ session: sess });
    place.creator.places.pull(place);
    await place.creator.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    return next(new HttpError("Deleting place failed!", 500));
  }

  fs.unlink(imagePath, (err) => {
    console.log(err);
  });

  res.status(200).json({ message: "Deleted place!" });
};
