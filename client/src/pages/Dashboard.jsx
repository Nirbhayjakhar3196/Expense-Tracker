import { useState } from "react";

import SummaryCard from "../components/dashboard/SummaryCard";
import RecentTransaction from "../components/dashboard/RecentTransaction";
import Button from "../components/common/Button";
import ExpenseModal from "../components/dashboard/ExpenseModal";

function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");

  const [expenses, setExpenses] = useState([
    {
      id: 1,
      title: "Gaming",
      amount: 1000,
      category: "Entertainment",
      date: "2026-07-04",
      notes: "",
      type: "expense",
    },
    {
      id: 1,
      title: "Shopping",
      amount: 2000,
      category: "Shopping",
      date: "2026-04-04",
      notes: "",
      type: "expense",
    },
    {
      id: 1,
      title: "Medicine",
      amount: 550,
      category: "Bills",
      date: "2025-07-04",
      notes: "",
      type: "expense",
    },
    {
      id: 1,
      title: "Mastiii",
      amount: 900,
      category: "Entertainment",
      date: "2026-07-04",
      notes: "",
      type: "expense",
    },
  ]);

  const handleSaveExpense = (newExpense) => {
    const expense = {
      ...newExpense,
      id: Date.now(),
      type: "expense",
    };

    setExpenses((prev) => [expense, ...prev]);

    setIsModalOpen(false);

    console.log(expense);
  };

  const handleDeleteExpense = (id) => {

    setExpenses((prev) => prev.filter((expense) => expense.id !== id));

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

  const filteredExpenses = expenses.filter((expense) => 
    expense.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

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