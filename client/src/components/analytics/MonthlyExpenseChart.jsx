import { Bar } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

function MonthlyExpenseChart({ expenses }) {

  const monthlyExpenses = {};

  expenses.forEach((expense) => {

    const month = new Date(expense.date).toLocaleString("default", {
      month: "short",
    });

    monthlyExpenses[month] =
      (monthlyExpenses[month] || 0) +
      Number(expense.amount);

  });

  const data = {
    labels: Object.keys(monthlyExpenses),

    datasets: [
      {
        label: "Monthly Expenses",
        data: Object.values(monthlyExpenses),
      },
    ],
  };

  return (
    <div className="bg-white rounded-xl shadow border p-6">

      <h2 className="text-xl font-bold mb-5">
        Monthly Expenses
      </h2>

      <Bar data={data} />

    </div>
  );
}

export default MonthlyExpenseChart;