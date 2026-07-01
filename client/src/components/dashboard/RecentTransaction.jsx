import TransactionItem from "./TransactionItem";

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
         <TransactionItem
            key={transaction.id}
            transaction={transaction}
        />
        ))}

      </div>

    </div>

  );

}

export default RecentTransactions;