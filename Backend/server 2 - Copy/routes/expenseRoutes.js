const express = require("express");
const { createExpense, getExpenses } = require("../controllers/expenseCtrl");
const router = express.Router();
const { verifyToken } = require("../middleware/authMiddleware");

// Protect expense routes with authentication
router.use(verifyToken);

router.post("/create", createExpense);
router.get("/", getExpenses);

module.exports = router;
