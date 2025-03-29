const checkAuth = (req, res, next) => {

  if (!req.header.authorization) {
    return res.status(401).json({
      data: {
        message: "Auth token is missing.",
      },
    });
  }

  const token = req.header.authorization.split(" ")[0];

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

export default checkAuth;