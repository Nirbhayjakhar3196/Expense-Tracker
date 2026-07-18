import {Bar} from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
}
from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

function MonthlyExpenseChart({expenses}) {

  const monthlyExpenses = {}

  expenses.forEach((expense) => {

    const month = new Date(expense.date).toLocaleString('default', { month: 'long' });

    if (!monthlyExpenses[month]) {
      monthlyExpenses[month] = 0;
    }
    monthlyExpenses[month] += expense.amount;

  });

  const data = {
    labels : Object.keys(monthlyExpenses),

    datasets : [
      {
        label : "Expenses",
        data : Object.values(monthlyExpenses),
      }
    ]
  };

   return (
    <div className="bg-white rounded-xl shadow border p-6">

      <h2 className="text-xl font-bold mb-5">
        Monthly Expenses
      </h2>

      <div className="h-72">
          <Bar
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

export default MonthlyExpenseChart;