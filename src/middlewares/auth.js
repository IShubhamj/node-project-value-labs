const jwt = require("jsonwebtoken");

const checkAuth = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({
      data: {
        message: "Auth token is missing.",
      },
    });
  }

  const token = req.headers.authorization.split(" ")[1];
  jwt.verify(token, process.env.SECRET, function (err, decoded) {
    if (err) {
      return res.status(401).json({
        data: {
          message: "Invalid auth token.",
        },
      });
    }
    req.userData = decoded
    next()
  });
};

module.exports = {
    checkAuth
}