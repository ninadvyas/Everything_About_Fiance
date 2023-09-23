const mongoose = require("mongoose");

const ExpenseSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Auth",
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  type: {
    type: String,
    enum: ["credit", "debit"],
    required: true,
  },
  paymentMethod: {
    type: String,
    enum: ["Cash", "UPI"],
    required: true,
  },
});

module.exports = mongoose.model("Expense", ExpenseSchema);
