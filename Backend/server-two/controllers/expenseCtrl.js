const Expense = require("../model/ExpenseModel");

const createExpense = async (req, res) => {
  try {
    const { description, amount, type, paymentMethod } = req.body;
    const userId = req.userId;

    const expense = new Expense({
      userId,
      description,
      amount,
      type,
      paymentMethod,
    });

    await expense.save();

    res.status(201).json({ message: "Expense created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const getExpenses = async (req, res) => {
  try {
    const userId = req.userId;
    const expenses = await Expense.find({ userId });

    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  createExpense,
  getExpenses,
};
