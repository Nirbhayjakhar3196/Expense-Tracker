const express = require("express");

const router = express.Router();

const expenseController = require("../controller/expenseController");

router.post("/", expenseController.createExpense);

router.get("/" , expenseController.getAllExpenses)

module.exports = router;