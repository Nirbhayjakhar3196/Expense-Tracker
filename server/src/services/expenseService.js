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

const updateExpense = async(id , expenseData) => {

    const expense = await Expense.findByIdAndUpdate(
        id,
        expenseData,
        {
            new:true,
            runValidators:true
        }
    )

    return expense
}

module.exports = {
  createExpense,
  getAllExpenses,
  deleteExpense,
  updateExpense
};