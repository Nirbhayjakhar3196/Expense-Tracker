import { useState } from "react";

import SummaryCard from "../components/dashboard/SummaryCard";
import RecentTransaction from "../components/dashboard/RecentTransaction";
import Button from "../components/common/Button";
import ExpenseModal from "../components/dashboard/ExpenseModal";

function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <SummaryCard
          title="Total Balance"
          amount="₹50,000"
          color="text-blue-600"
        />

        <SummaryCard
          title="Total Income"
          amount="₹80,000"
          color="text-green-600"
        />

        <SummaryCard
          title="Total Expense"
          amount="₹30,000"
          color="text-red-600"
        />

        <RecentTransaction transactions={expenses} />
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