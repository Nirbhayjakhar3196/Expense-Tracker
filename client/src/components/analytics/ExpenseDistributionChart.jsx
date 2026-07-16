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

function ExpenseDistributionChart({ expenses }) {

  const categoryTotals = {};

  expenses.forEach((expense) => {

    if (expense.type !== "expense") return;

    categoryTotals[expense.category] =
      (categoryTotals[expense.category] || 0) +
      Number(expense.amount);

  });

  const data = {
    labels: Object.keys(categoryTotals),

    datasets: [
      {
        label: "Amount Spent",
        data: Object.values(categoryTotals),

        backgroundColor: "#3b82f6",

        borderRadius: 8,
      },
    ],
  };

  const options = {
    responsive: true,

    indexAxis: "y",

    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (

    <div className="bg-white rounded-xl shadow border p-6">

      <h2 className="text-xl font-bold mb-5">
        Top Spending Categories
      </h2>

      <Bar
        data={data}
        options={options}
      />

    </div>

  );
}

export default ExpenseDistributionChart;