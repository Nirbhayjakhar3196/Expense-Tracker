import {Pie} from 'react-chartjs-2';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement , Tooltip , Legend);

function ExpenseCategoryChart({ expenses }) {

    const categories = {};

    expenses.forEach((expense) => {
        categories[expense.category] =
            (categories[expense.category] || 0) + Number(expense.amount);
    });

    const data = {
        labels: Object.keys(categories),
        datasets: [
            {
                label: "Expenses",
                data: Object.values(categories),
            },
        ],
    };

    return (
        <div className="bg-white rounded-xl shadow border p-6">
            <h2 className="text-xl font-bold mb-5">
                Expense By Category
            </h2>

            <Pie data={data} />
        </div>
    );
}

export default ExpenseCategoryChart