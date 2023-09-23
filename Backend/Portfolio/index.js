const express = require("express");
const app = express();
const morgan = require("morgan");

const DB = require("./Config/DB");
// const Portfolio = require("./Models/Portfolio");
const portfolioRoutes = require('./Routes/PortfolioRoutes');

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

DB(
  "mongodb+srv://user:user@cluster0.5pmuoac.mongodb.net/?retryWrites=true&w=majority"
);

app.use('/api/portfolio', portfolioRoutes);

// app.get("/display", async (req,res) => {
//     const {userId} = req.body;
//     try {
//       const portfolio = await Portfolio.findOne({ userId });
//       if (!portfolio) {
//         return res.status(404).json({ message: "User portfolio not found" });
//       }
//       return res.json(portfolio.stocks);
//     } catch (error) {
//       return res.status(500).json({ message: "Error displaying stocks", error });
//     }  
// });

// app.post("/buy", async (req, res) => {
//   const { stockId, quantity, price, userId } = req.body;

//   try {
//     // Find the user's portfolio in the database
//     let portfolio = await Portfolio.findOne({ userId });

//     if (!portfolio) {
//       // If the portfolio doesn't exist, create a new one
//       portfolio = new Portfolio({
//         userId,
//         stocks: [],
//         funds: 10000,
//       });
//     }

//     // Find the stock with the provided stockId in the user's portfolio
//     const stock = portfolio.stocks.find((stock) => stock.tickerId === stockId);

//     if (stock) {
//       console.log("Processing an existing stock", stockId);

//       // Calculate the new average price
//       const existingValue = stock.quantity * stock.avgValue;
//       const newValue = quantity * price;
//       stock.avgValue = (existingValue + newValue) / (stock.quantity + quantity);

//       // Update the quantity
//       stock.quantity += parseInt(quantity);
//     } else {
//       console.log("Stock not found. Creating a new stock", stockId);

//       // Create a new stock entry
//       const newStock = {
//         tickerId: stockId,
//         nameOfStock: "Name of the stock", // Replace with the actual name or fetch it from somewhere
//         quantity: parseInt(quantity),
//         avgValue: parseFloat(price), // Assuming 'price' represents the average value
//       };

//       portfolio.stocks.push(newStock);
//     }

//     // Change in Funds
//     portfolio.funds = portfolio.funds - quantity * price;

//     // Save the updated portfolio in the database
//     await portfolio.save();

//     return res
//       .status(200)
//       .json({ message: "Successfully bought stocks", portfolio });
//   } catch (error) {
//     console.error("Error while buying stocks:", error);
//     return res.status(500).json({ message: "Internal server error" });
//   }
// });

// app.post("/sell", async (req, res) => {
//   const { stockId, quantity, price, userId } = req.body;

//   try {
//     // Find the user's portfolio in the database
//     let portfolio = await Portfolio.findOne({ userId });

//     if (!portfolio) {
//       return res.status(404).json({ message: "User portfolio not found" });
//     }

//     // Find the stock with the provided stockId in the user's portfolio
//     const stock = portfolio.stocks.find((stock) => stock.tickerId === stockId);

//     if (!stock) {
//       return res
//         .status(404)
//         .json({ message: "Stock not found in the portfolio" });
//     }

//     if (stock.quantity < quantity) {
//       return res.status(400).json({ message: "Insufficient quantity to sell" });
//     }

//     console.log("Processing a sell order for stock", stockId);

//     const sellingPrice = quantity * price;

//     // portfolio.quantity = portfolio.quantity - quantity;

//     stock.quantity -= parseInt(quantity);
//     if (stock.quantity === 0) {
//       // If the quantity becomes zero, remove the stock from the portfolio
//       portfolio.stocks = portfolio.stocks.filter(
//         (stock) => stock.tickerId !== stockId
//       );
//     }

//      // Change
//      portfolio.funds = portfolio.funds + sellingPrice;

//     // Save the updated portfolio in the database
//     await portfolio.save();

//     return res
//       .status(200)
//       .json({ message: "Successfully sold stocks", portfolio });
//   } catch (error) {
//     console.error("Error while selling stocks:", error);
//     return res.status(500).json({ message: "Internal server error" });
//   }
// });

app.listen(3000, () => {
  console.log("Server is running");
});
