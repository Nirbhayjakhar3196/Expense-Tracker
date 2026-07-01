function RecentTransactions() {

  const transactions = [
    {
      id: 1,
      title: "Salary",
      amount: 50000,
      type: "income",
      date: "Today",
      icon: "💰"
    },
    {
      id: 2,
      title: "Groceries",
      amount: 1200,
      type: "expense",
      date: "Yesterday",
      icon: "🛒"
    },
    {
      id: 3,
      title: "Uber",
      amount: 450,
      type: "expense",
      date: "2 Jul",
      icon: "🚕"
    },
    {
      id: 4,
      title: "Freelancing",
      amount: 15000,
      type: "income",
      date: "3 Jul",
      icon: "💻"
    },
    {
      id: 5,
      title: "Gaming",
      amount: 1000,
      type: "expense",
      date: "4 Jul",
      icon: "🎮"
    }
    
  ];

  return (

    <div className="bg-white rounded-xl shadow-md border p-6 mt-8">

      <h2 className="text-xl font-bold mb-6">
        Recent Transactions
      </h2>

      <div>

        {transactions.map((transaction) => (

          <div
            key={transaction.id}
            className="flex justify-between items-center py-4 border-b last:border-b-0"
          >

            <div className="flex items-center gap-4">

              <div className="text-3xl">
                {transaction.icon}
              </div>

              <div>

                <h3 className="font-semibold">
                  {transaction.title}
                </h3>

                <p className="text-gray-500 text-sm">
                  {transaction.date}
                </p>

              </div>

            </div>

            <div>

              <span
                className={`font-bold ${
                  transaction.type === "income"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {transaction.type === "income" ? "+" : "-"}₹
                {transaction.amount}
              </span>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}

export default RecentTransactions;