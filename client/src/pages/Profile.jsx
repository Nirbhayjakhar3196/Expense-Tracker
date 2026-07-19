import { useEffect, useState } from "react";

import { getExpenses } from "../services/expenseService";

import ProfileCard from "../components/profile/ProfileCard";
import UserStats from "../components/profile/UserStats";

function Profile() {

  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {

    try {

      const data = await getExpenses();

      setExpenses(data);

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <main className="flex-1 p-6">

      <h1 className="text-3xl font-bold">
        Profile
      </h1>

      <p className="text-gray-500 mt-2">
        Manage your account and view your statistics.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">

        <ProfileCard />

        <div className="lg:col-span-2">

          <UserStats
            expenses={expenses}
          />

        </div>

      </div>

    </main>

  );

}

export default Profile;