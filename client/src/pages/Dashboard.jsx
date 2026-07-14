import { useState , useEffect } from "react";

import { getExpenses , createExpenses , deleteExpenses } from "../services/expenseService";
import SummaryCard from "../components/dashboard/SummaryCard";
import RecentTransaction from "../components/dashboard/RecentTransaction";
import Button from "../components/common/Button";
import ExpenseModal from "../components/dashboard/ExpenseModal";

function Dashboard() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("All")

  const [expenses, setExpenses] = useState();

  const handleSaveExpense = (newExpense) => {
    
    try {
      await createExpenses(newExpense)

      fetchExpense()

      setIsModalOpen(false);
      
    } catch (error) {
      console.log(error);
      
    }
  };

  useEffect(() => {
    fetchExpense()
  },[])

  const fetchExpense = async() => {

    try {
      const data = await getExpenses

      setExpenses(data)
      
    } catch (error) {
      console.log(error);
      
    }

  }

  const handleDeleteExpense = (id) => {

    try {

      await deleteExpenses(id)

      fetchExpense()
      
    } catch (error) {
      console.log(error);
      
    }

  }

  const totalExpense = expenses.reduce((total , expense) => {

    if(expense.type === "expense") {
      return total + Number(expense.amount);
    }

    return total;

  }, 0)

  const totalIncome = expenses.reduce((total , expense) => {

    if(expense.type === "income"){
      return total + Number(expense.amount);
    }

    return total;
  },0)

  const totalBalance = totalIncome - totalExpense;

  const filteredExpenses = expenses.filter((expense) => {
    const matchesSearch =expense.title.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesCateogory = 
          selectedCategory === "All" ||
          expense.category === selectedCategory;

    return matchesCateogory && matchesSearch

})

  return (
    <main className="flex-1 p-6">
      <h1 className="text-3xl font-bold">
        Dashboard
      </h1>

      <p className="text-gray-500 mt-2">
        Welcome back! Here's your financial overview.
      </p>

      <div className="mt-5">
        <Button onClick={() => setIsModalOpen(true)}>
          Add Expense
        </Button>
      </div>

      <div className="mt-6">
        <input
          type="text"
          placeholder="🔍 Search expenses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-96 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="ml-3 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
        >

          <option value="All">All Categories</option>
          <option value="Food">Food</option>
          <option value="Shopping">Shopping</option>
          <option value="Travel">Travel</option>
          <option value="Bills">Bills</option>
          <option value="Entertainment">Entertainment</option>

        </select>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <SummaryCard
          title="Total Balance"
          amount={`₹${totalBalance}`}
          color="text-blue-600"
        />

        <SummaryCard
          title="Total Income"
          amount={`₹${totalIncome}`}
          color="text-green-600"
        />

        <SummaryCard
          title="Total Expense"
          amount={`₹${totalExpense}`}
          color="text-red-600"
        />

        <RecentTransaction transactions={filteredExpenses} onDelete={handleDeleteExpense} />
      </div>

      {isModalOpen && (
        <ExpenseModal
          onClose={() => setIsModalOpen(false)}
          onSave={handleSaveExpense}
        />
      )}
    </main>
  );
}

export default Dashboard;