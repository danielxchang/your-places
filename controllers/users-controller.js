const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

const User = require("../models/user");
const HttpError = require("../models/http-error");
const { generateToken } = require("../util/token");

exports.getUsers = async (req, res, next) => {
  let users;
  try {
    users = await User.find({}, "-password");
  } catch (err) {
    return next(
      new HttpError("Something went wrong, unable to retrieve users!", 500)
    );
  }
  res.json({ users: users.map((user) => user.toObject({ getters: true })) });
};

exports.signup = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(new HttpError(errors.errors[0].msg, 422));
  }

  const { name, email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    return next(
      new HttpError("Signing up failed, please try again later.", 500)
    );
  }

  if (existingUser) return next(new HttpError("User exists already!", 422));

  let hashedPassword;
  try {
    hashedPassword = await bcrypt.hash(password, 12);
  } catch (err) {
    return next(new HttpError("Could not create user, please try again.", 500));
  }

  const createdUser = new User({
    name,
    email,
    password: hashedPassword,
    image: req.file.path,
    places: [],
  });

  try {
    await createdUser.save();
  } catch (err) {
    return next(new HttpError("Sign up failed!", 500));
  }

  let token;
  try {
    token = generateToken(createdUser, "Sign up failed!");
  } catch (err) {
    return next(err);
  }

  res
    .status(201)
    .json({ userId: createdUser.id, email: createdUser.email, token });
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  let identifiedUser;
  try {
    identifiedUser = await User.findOne({ email });
  } catch (err) {
    return next(new HttpError("Something went wrong, login failed!", 500));
  }

  if (!identifiedUser)
    return next(new HttpError("Login credentials have failed!", 403));

  let isValidPassword = false;
  try {
    isValidPassword = await bcrypt.compare(password, identifiedUser.password);
  } catch (err) {
    return next(
      new HttpError(
        "Could not log you in, please check your credentials and try again.",
        500
      )
    );
  }

  if (!isValidPassword)
    return next(new HttpError("Login credentials have failed!", 403));

  let token;
  try {
    token = generateToken(
      identifiedUser,
      "Could not log you in, please check your credentials and try again."
    );
  } catch (err) {
    return next(err);
  }

  res.json({
    userId: identifiedUser.id,
    email: identifiedUser.email,
    token,
  });
};
