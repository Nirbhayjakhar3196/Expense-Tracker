const expenseService = require("../services/expenseService")

const createExpense = async(req, res) => {

    try {
        
        const expense = await expenseService.createExpense(req.body)

        res.status(201).json({
            success:true,
            message:"Expense Added successfully",
            data:expense
        })

    } catch (error) {
        res.status(500).json({
            message:error.message,
            success:false
        })
    }

}

const getAllExpenses = async(req , res) => {

    try {

        const expenses = await expenseService.getAllExpenses();

        res.status(200).json({
            success:true,
            count:expenses.length,
            data:expenses
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }

}

module.exports = {
    createExpense,
    getAllExpenses
}