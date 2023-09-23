const mongoose = require("mongoose");

const stockSchema = new mongoose.Schema(
  {
    tickerId: {
      type: String,
      required: true,
    },
    nameOfStock: {
      type: String,
      required: true,
    },
    quantity: Number,
    avgValue: Number,
  },
  { timestamps: true }
);

const portfolioSchema = new mongoose.Schema({
  // UserId Object link
  funds: Number,
  userId: String,
  stocks: [stockSchema],
});

module.exports = mongoose.model("Portfolio", portfolioSchema);