const express = require("express");
const { registerAuth, loginAuth } = require("../controllers/authCtrl");
const router = express.Router();
const { verifyToken } = require("../middleware/authMiddleware");

router.post("/register", registerAuth);
router.post("/login", loginAuth);

module.exports = router;

// Register a new user:
// POST /api/auth/register

// User login:
// POST /api/auth/login
