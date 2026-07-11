
function TransactionItem({ transaction ,onDelete }) {
  return (
    <div className="flex justify-between items-center py-4 border-b last:border-b-0 hover:bg-gray-100 rounded-lg px-2 cursor-pointer">

      {/* Left Section */}
      <div className="flex items-center gap-4">

        <div className="text-3xl">
          {transaction.icon ||"💸" }
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

      {/* Right Section */}
      <div className="flex items-center gap-3">

        <span
          className={`font-bold ${
            transaction.type === "income"
              ? "text-green-600"
              : "text-red-500"
          }`}
        >
          {transaction.type === "income" ? "+" : "-"}₹
          {transaction.amount}
        </span>

        <button
          onClick={() => onDelete(transaction.id)}
          className="text-red-500 hover:text-red-700"
        >
          🗑️
        </button>

      </div>

    </div>
  );
}

export default TransactionItem;