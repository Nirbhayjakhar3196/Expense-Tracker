const express = require("express");
const cors = require("cors");
const expenseRoutes = require("./routes/expenseRoutes")

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/expenses" , expenseRoutes)

app.get("/", (req, res) => {
  res.send("Hello World!");
});

module.exports = app;