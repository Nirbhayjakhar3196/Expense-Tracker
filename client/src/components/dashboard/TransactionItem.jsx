function TransactionItem({ transaction }) {
  return (
    <div className="flex justify-between items-center py-4 border-b last:border-b-0">

      {/* Left Section */}
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

      {/* Right Section */}
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
  );
}

export default TransactionItem;