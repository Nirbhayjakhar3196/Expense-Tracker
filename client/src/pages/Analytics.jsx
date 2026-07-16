import { useEffect, useState } from "react";
import ExpenseCategoryChart from "../components/analytics/ExpenseCategoryChart";
import MonthlyExpenseChart from "../components/analytics/MonthlyExpenseChart";
import { getExpenses } from "../services/expenseService";

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

  return (
    <main className="flex-1 p-6">

      <h1 className="text-3xl font-bold">
        Analytics
      </h1>

      <p className="text-gray-500 mt-2">
        Track your spending with visual insights.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">

          <ExpenseCategoryChart
              expenses={expenses}
          />

          <MonthlyExpenseChart
              expenses={expenses}
          />

      </div>

    </main>
  );
}

export default Analytics;