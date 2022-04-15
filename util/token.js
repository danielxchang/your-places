const jwt = require("jsonwebtoken");

const HttpError = require("../models/http-error");

const SECRET_KEY = process.env.JWT_KEY;

const generateToken = (user, errorMessage) => {
  try {
    token = jwt.sign({ userId: user.id, email: user.email }, SECRET_KEY, {
      expiresIn: "1h",
    });
    return token;
  } catch (err) {
    throw new HttpError(errorMessage, 500);
  }
};

const checkToken = (token) => {
  try {
    const decodedToken = jwt.verify(token, SECRET_KEY);
    return decodedToken;
  } catch (err) {
    throw new Error("Invalid token!");
  }
};

exports.generateToken = generateToken;
exports.checkToken = checkToken;
