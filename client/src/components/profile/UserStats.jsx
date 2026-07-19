function UserStats({ expenses }) {

  const totalExpense = expenses.reduce(
    (sum, expense) => sum + Number(expense.amount),
    0
  );

  const totalTransactions = expenses.length;

  const highestExpense =
    expenses.length > 0
      ? Math.max(...expenses.map((e) => Number(e.amount)))
      : 0;

  const categories = {};

  expenses.forEach((expense) => {
    categories[expense.category] =
      (categories[expense.category] || 0) + 1;
  });

  const favouriteCategory =
    Object.keys(categories).length > 0
      ? Object.keys(categories).reduce((a, b) =>
          categories[a] > categories[b] ? a : b
        )
      : "N/A";

  const stats = [
    {
      title: "Total Expense",
      value: `₹${totalExpense}`,
    },
    {
      title: "Transactions",
      value: totalTransactions,
    },
    {
      title: "Highest Expense",
      value: `₹${highestExpense}`,
    },
    {
      title: "Favourite Category",
      value: favouriteCategory,
    },
  ];

  return (

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      {stats.map((stat) => (

        <div
          key={stat.title}
          className="bg-white rounded-xl shadow border p-6"
        >

          <h3 className="text-gray-500">
            {stat.title}
          </h3>

          <p className="text-2xl font-bold mt-3">
            {stat.value}
          </p>

        </div>

      ))}

    </div>

  );

}

export default UserStats;