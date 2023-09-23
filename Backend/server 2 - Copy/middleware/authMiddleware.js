const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../model/AuthModel.js"); // Import your Auth model here

// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res
      .status(401)
      .json({ message: "Authentication failed: No token provided" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res
        .status(401)
        .json({ message: "Authentication failed: Invalid token" });
    }
    req.userId = decoded.id;
    next();
  });
};

module.exports = { verifyToken };
