const HttpError = require("../models/http-error");

const { checkToken } = require("../util/token");

module.exports = (req, res, next) => {
  if (req.method === "OPTIONS") return next();

  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) throw new Error("Authentication failed!");
    const decodedToken = checkToken(token);
    req.userData = { userId: decodedToken.userId };
    next();
  } catch (err) {
    const error = new HttpError("Authentication failed!", 403);
    return next(error);
  }
};
