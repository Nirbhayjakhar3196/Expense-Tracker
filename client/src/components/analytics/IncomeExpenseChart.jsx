import { Doughnut } from "react-chartjs-2";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

function IncomeExpenseChart({ expenses }) {

  const totalIncome = expenses.reduce((total, expense) => {
    return expense.type === "income"
      ? total + Number(expense.amount)
      : total;
  }, 0);

  const totalExpense = expenses.reduce((total, expense) => {
    return expense.type === "expense"
      ? total + Number(expense.amount)
      : total;
  }, 0);

  const data = {
    labels: ["Income", "Expense"],

    datasets: [
      {
        data: [totalIncome, totalExpense],

        backgroundColor: [
          "#22c55e",
          "#ef4444",
        ],

        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return (
    <div className="bg-white rounded-xl shadow border p-6">

      <h2 className="text-xl font-bold mb-5">
        Income vs Expense
      </h2>

            <div className="h-72 flex justify-center items-center">
          <Doughnut
              data={data}
              options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                      legend: {
                          position: "top",
                      },
                  },
              }}
          />
      </div>

    </div>
  );
}

export default IncomeExpenseChart;