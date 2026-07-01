import { LayoutDashboard , Receipt , IndianRupee , ChartColumn ,User, Wallet  } from "lucide-react";

function Sidebar() {
  return (
    <aside className="w-66 bg-white border-r min-h-screen p-5">

      <h2 className="flex gap-2 items-center text-2xl font-bold text-green-600 mb-8">
        <Wallet className="h-7 w-7"/>
        Expense Tracker
      </h2>

      <nav className="flex flex-col gap-3">
        <button className="flex items-center gap-3 p-3 rounded-lg hover:bg-green-100 transition-colors duration-300">
          <LayoutDashboard className="w-5 h-5"/> 
          Dashboard
        </button>

        <button className="flex items-center gap-3 p-3 rounded-lg hover:bg-green-100 transition-all duration-300">
          <Receipt className="w-5 h-5"/>
          Expenses
        </button>

        <button className="flex items-center gap-3 p-3 rounded-lg hover:bg-green-100 transition-all duration-300">
          <IndianRupee className="w-5 h-5"/>
          Income
        </button>

        <button className="flex items-center gap-3 p-3 rounded-lg hover:bg-green-100 transition-all duration-300">
          <ChartColumn className="w-5 h-5"/>
          Analytics
        </button>

        <button className="flex items-center gap-3 p-3 rounded-lg hover:bg-green-100 transition-all duration-300">
          <User className="w-5 h-5"/>
          Profile
        </button>

      </nav>

    </aside>
  );
}

export default Sidebar;