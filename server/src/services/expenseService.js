const Expense = require("../models/Expense");

const createExpense = async (expenseData) => {
  const expense = await Expense.create(expenseData);

  return expense;
};

const getAllExpenses = async() => {

    const expenses = await Expense.find().sort({ createdAt: -1 });

    return expenses

}

module.exports = {
  createExpense,
  getAllExpenses
};