function Analytics() {
  return (
    <main className="flex-1 p-6">

      <h1 className="text-3xl font-bold">
        Analytics
      </h1>

      <p className="text-gray-500 mt-2">
        Track your spending with visual insights.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

        <div className="bg-white rounded-xl shadow border p-6 h-80">
          Expense by Category
        </div>

        <div className="bg-white rounded-xl shadow border p-6 h-80">
          Monthly Expenses
        </div>

        <div className="bg-white rounded-xl shadow border p-6 h-80">
          Income vs Expense
        </div>

        <div className="bg-white rounded-xl shadow border p-6 h-80">
          Expense Distribution
        </div>

      </div>

    </main>
  );
}

export default Analytics;