import TransactionItem from "./TransactionItem";

function RecentTransactions({ transactions }) {

  return (
    <div className="bg-white rounded-xl shadow-md border p-6 mt-8">

      <h2 className="text-xl font-bold mb-6">
        Recent Transactions
      </h2>

      {transactions.length === 0 ? (
        <p className="text-gray-500 text-center">
          No transactions yet.
        </p>
      ) : (
        <div>
          {transactions.map((transaction) => (
            <TransactionItem
              key={transaction.id}
              transaction={transaction}
            />
          ))}
        </div>
      )}

    </div>
  );
}

export default RecentTransactions;