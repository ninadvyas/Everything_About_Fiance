const express = require("express");
const app = express();
const DB = require("./config/DB");

// Libraries
const morgan = require("morgan");
require("dotenv").config();

// Import Routes

const authRoutes = require("./routes/authRoutes");
const expenseRoutes = require("./routes/expenseRoutes");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

const jwtSecret = process.env.JWT_SECRET;

// DB Connection
DB(process.env.MongoURL);

// Routes
// app.use("/", (req, res) => {
//   res.end("Hello");
// });

app.use("/api/auth", authRoutes); // without auth can access
app.use("/api/expenses", expenseRoutes);
// 404 Page

// Server Running
const PORT = process.env.BACKEND_PORT || 8888;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
