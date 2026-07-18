import { useEffect, useState } from "react";
import ExpenseCategoryChart from "../components/analytics/ExpenseCategoryChart";
import MonthlyExpenseChart from "../components/analytics/MonthlyExpenseChart";
import { getExpenses } from "../services/expenseService";
import IncomeExpenseChart from "../components/analytics/IncomeExpenseChart";
import ExpenseDistributionChart from "../components/analytics/ExpenseDistributionChart";
import SummaryCard from "../components/dashboard/SummaryCard";

function Analytics() {

  const [loading , setLoading] = useState(true);
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {

    try {
      const data = await getExpenses();
      setExpenses(data);
      
    } catch (error) {
      console.error("Error fetching expenses:", error);
    }
    finally {
      setLoading(false);
    }

  }

  useEffect(() => {
    fetchExpenses();
  }, []);

  if (loading) {
    return (
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold">
          Analytics
        </h1>

        <p className="mt-5">
          Loading Charts...
        </p>
      </main>
    );
  }

  const totalExpense = expenses.reduce(
    (sum , expense) => sum + Number(expense.amount) , 0
  )

  const totalCategories = new Set(
    expenses.map((expense) => expense.category)
  ).size

  const highestExpense = expenses.length > 0 ? Math.max(...expenses.map((expense) => Number(expense.amount))) : 0

  const averageExpense = expenses.length > 0 ? Math.round(totalExpense / expenses.length ) : 0;

  const totalTransaction = expenses.length

  if (expenses.length === 0) {
    return (
        <main className="flex-1 p-6">

            <h1 className="text-3xl font-bold">
                Analytics
            </h1>

            <div className="bg-white rounded-xl shadow border p-12 mt-8 text-center">

                <h2 className="text-3xl mb-4">
                    📊
                </h2>

                <p className="text-gray-600">
                    No analytics available.
                </p>

                <p className="text-gray-500 mt-2">
                    Add some expenses to view charts.
                </p>

            </div>

        </main>
    );
}

  return (
    <main className="flex-1 p-6">

      <h1 className="text-3xl font-bold">
        Analytics
      </h1>

      <p className="text-gray-500 mt-2">
        Track your spending with visual insights.
      </p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">

          <SummaryCard
              title="Total Expense"
              amount={`₹${totalExpense}`}
              color="text-red-500"
          />

          <SummaryCard
              title="Categories"
              amount={totalCategories}
              color="text-blue-500"
          />

          <SummaryCard
              title="Highest Expense"
              amount={`₹${highestExpense}`}
              color="text-orange-500"
          />

          <SummaryCard
              title="Average Expense"
              amount={`₹${averageExpense}`}
              color="text-green-500"
          />

      </div>

      <div className="bg-white rounded-xl shadow border p-6 mt-8">

    <h2 className="text-2xl font-bold mb-5">
        📊 Insights
    </h2>

    <div className="space-y-3">

        <p>
            Total Transactions :
            <strong> {totalTransaction}</strong>
        </p>

        <p>
            Highest Spending :
            <strong> ₹{highestExpense}</strong>
        </p>

        <p>
            Average Expense :
            <strong> ₹{averageExpense}</strong>
        </p>

        <p>
            Categories Used :
            <strong> {totalCategories}</strong>
        </p>

    </div>

</div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">

          <ExpenseCategoryChart
              expenses={expenses}
          />

          <MonthlyExpenseChart
              expenses={expenses}
          />

          <IncomeExpenseChart
            expenses={expenses}
          />

          <ExpenseDistributionChart
            expenses={expenses}
          />

      </div>

      

    </main>
  );
}

export default Analytics;