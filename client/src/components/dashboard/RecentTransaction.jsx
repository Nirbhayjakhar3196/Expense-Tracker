import TransactionItem from "./TransactionItem";

function RecentTransactions({ transactions , onDelete , onEdit }) {

  return (
    <div className="bg-white rounded-xl shadow-md border p-6 mt-8">

      <h2 className="text-xl font-bold mb-6">
        Recent Transactions
      </h2>

      {transactions.length === 0 ? (

        <div className="text-center py-12">

            <div className="text-6xl mb-4">
                📭
            </div>

            <h3 className="text-xl font-semibold text-gray-700">
                No Expenses Found
            </h3>

            <p className="text-gray-500 mt-2">
                Try changing your search or add a new expense.
            </p>

        </div>

    ) : (
        <div>
          {transactions.map((transaction) => (
            <TransactionItem
              key={transaction.id}
              transaction={transaction}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))}
        </div>
      )}

    </div>
  );
}

export default RecentTransactions;