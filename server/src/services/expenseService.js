const Expense = require("../models/Expense");

const createExpense = async (expenseData) => {
  const expense = await Expense.create(expenseData);

  return expense;
};

module.exports = {
  createExpense,
};