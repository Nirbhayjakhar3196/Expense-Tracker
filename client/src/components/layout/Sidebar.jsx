function Sidebar() {
  return (
    <aside className="w-66 bg-white border-r min-h-screen p-5">

      <h2 className="text-2xl font-bold text-green-600 mb-8">
        💰 Expense Tracker
      </h2>

      <nav className="flex flex-col gap-3">

        <button className="text-left p-3 rounded-lg hover:bg-green-100 transition-all duration-300">
          🏠 Dashboard
        </button>

        <button className="text-left p-3 rounded-lg hover:bg-green-100 transition-all duration-300">
          💸 Expenses
        </button>

        <button className="text-left p-3 rounded-lg hover:bg-green-100 transition-all duration-300">
          💵 Income
        </button>

        <button className="text-left p-3 rounded-lg hover:bg-green-100 transition-all duration-300">
          📊 Analytics
        </button>

        <button className="text-left p-3 rounded-lg hover:bg-green-100 transition-all duration-300">
          👤 Profile
        </button>

      </nav>

    </aside>
  );
}

export default Sidebar;