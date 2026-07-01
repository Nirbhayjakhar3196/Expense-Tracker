import SummaryCard from "../components/dashboard/SummaryCard"


function Dashboard(){

    return(

        <main className="flex-1 p-6">
            <h1 className="text-3xl font-bold ">
                Dashboard
            </h1>

            <p className="text-gray-500 mt-2">
                Welcome back! Here's your financial overview.
            </p>

            <div className="grid grid-cols-3 gap-6 mt-6">
                
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

            </div>

        </main>
    )

}


export default Dashboard