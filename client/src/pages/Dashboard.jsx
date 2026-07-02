import RecentTransaction from "../components/dashboard/RecentTransaction"
import SummaryCard from "../components/dashboard/SummaryCard"
import Button from "../components/common/Button"
import ExpenseModal from "../components/dashboard/ExpenseModal"
import { useState } from "react"


function Dashboard(){

    const [isModalOpen, setisModalOpen] = useState(false)

    return(

        <main className="flex-1 p-6">
            <h1 className="text-3xl font-bold ">
                Dashboard
            </h1>

            <p className="text-gray-500 mt-2">
                Welcome back! Here's your financial overview.
            </p>

            <div className="mt-5">

                <Button onClick={()=> setisModalOpen(true)}>
                    Add Expense
                </Button>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                
                <SummaryCard
                    title="Total Balance"
                    amount = "₹50,000"
                    color= "text-blue-600"
                />
                <SummaryCard
                    title="Total Balance"
                    amount = "₹80,000"
                    color= "text-green-600"
                />
                <SummaryCard
                    title="Total Balance"
                    amount = "₹30,000"
                    color= "text-red-600"
                />

                <RecentTransaction/>

            </div>

            {
                isModalOpen && (

                    <ExpenseModal/>

                )
            }            

        </main>
    )

}


export default Dashboard