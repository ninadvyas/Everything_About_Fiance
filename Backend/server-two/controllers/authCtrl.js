// Register a new Auth:
// POST /api/auth/register

// Auth login:
// POST /api/auth/login

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Auth = require("../model/AuthModel.js");

const registerAuth = async (req, res) => {
  try {
    const { email, password, name, gender } = req.body;

    // Check if the email already exists
    const existingAuth = await Auth.findOne({ email });

    if (existingAuth) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new Auth
    const auth = new Auth({
      email,
      password: hashedPassword,
      name,
      gender,
    });

    await auth.save();

    res.status(201).json({ message: "Auth registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const loginAuth = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the Auth by email
    const auth = await Auth.findOne({ email });

    if (!auth) {
      return res
        .status(401)
        .json({ message: "Authentication failed: Invalid email" });
    }

    // Compare the provided password with the hashed password
    const passwordMatch = await bcrypt.compare(password, auth.password);

    if (!passwordMatch) {
      return res
        .status(401)
        .json({ message: "Authentication failed: Invalid  password" });
    }

    // Create and send a JWT token
    const token = jwt.sign({ id: auth._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
module.exports = {
  registerAuth,
  loginAuth,
};
