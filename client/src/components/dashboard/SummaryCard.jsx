

function SummaryCard({title , amount , color }){
    return (

        <div className="bg-white rounded-xl p-6 shadow-md border">

            <h3 className="text-gray-500 text-sm font-medium">
                {title}
            </h3>

            <h2 className={`text-3xl font-bold mt-3 ${color}`}>
                {amount}
            </h2>

        </div>

    )
}

export default SummaryCard