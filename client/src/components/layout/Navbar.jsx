import {Wallet} from "lucide-react"

function Navbar(){

    return(

        <nav className="h-16 bg-white border-b px-6 flex items-center justify-between">
            <h1 className="flex items-center gap-2 text-xl font-bold text-green-600">

                <Wallet className="w-7 h-7"/>

                Expense Tracker

            </h1>

            <div className="text-xl font-bold text-green-600">
                Welcome Nirbhay😎

            </div>

        </nav>

    )

}

export default Navbar