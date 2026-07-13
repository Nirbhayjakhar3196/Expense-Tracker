const Expense = require("../models/Expense");

const createExpense = async (expenseData) => {
  const expense = await Expense.create(expenseData);

  return expense;
};

const getAllExpenses = async() => {

    const expenses = await Expense.find().sort({ createdAt: -1 });

    return expenses

}

const deleteExpense = async(id) => {

    const expense = await Expense.findByIdAndDelete(id);

    return expense

}

module.exports = {
  createExpense,
  getAllExpenses,
  deleteExpense
};