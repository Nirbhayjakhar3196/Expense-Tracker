import { LayoutDashboard , Receipt , IndianRupee , ChartColumn ,User, Wallet  } from "lucide-react";

import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-64 shrink-0 bg-white border-r min-h-screen p-5">

      <h2 className="flex gap-2 items-center text-2xl font-bold text-green-600 mb-8">
        <Wallet className="h-7 w-7"/>
        Expense Tracker
      </h2>

      <nav className="flex flex-col gap-3">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg transition-all duration-300 ${
              isActive
                ? "bg-green-600 text-white"
                : "hover:bg-green-100"
            }`
          }
        >
          <LayoutDashboard className="w-5 h-5" />
          Dashboard
        </NavLink>

                <NavLink
          to="/expenses"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg transition-all duration-300 ${
              isActive
                ? "bg-green-600 text-white"
                : "hover:bg-green-100"
            }`
          }
        >
          <Receipt className="w-5 h-5" />
          Expenses
        </NavLink>

                <NavLink
          to="/income"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg transition-all duration-300 ${
              isActive
                ? "bg-green-600 text-white"
                : "hover:bg-green-100"
            }`
          }
        >
          <IndianRupee className="w-5 h-5" />
          Income
        </NavLink>

                <NavLink
          to="/analytics"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg transition-all duration-300 ${
              isActive
                ? "bg-green-600 text-white"
                : "hover:bg-green-100"
            }`
          }
        >
          <ChartColumn className="w-5 h-5" />
          Analytics
        </NavLink>

                <NavLink
          to="/profile"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg transition-all duration-300 ${
              isActive
                ? "bg-green-600 text-white"
                : "hover:bg-green-100"
            }`
          }
        >
          <User className="w-5 h-5"/>
          Profile
        </NavLink>

      </nav>

    </aside>
  );
}

export default Sidebar;