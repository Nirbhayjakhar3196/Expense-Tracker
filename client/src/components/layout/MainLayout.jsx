import Dashboard from "../../pages/Dashboard"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"


function MainLayout(){

    return(

        <div className="min-h-screen bg-gray-100">
            <Navbar/>

            <div className="flex">
                <Sidebar/>

                <Dashboard/>

            </div>

        </div>

    )

}

export default MainLayout