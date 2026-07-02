

function ExpenseModal({onClose}){

    return(

        <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
            <div className="bg-white rounded-xl p-6 w-full max-w-lg">
                <h2 className="text-2xl font-bold mb-6">
                    Add Expense
                </h2>

                <button
                    onClick={onClose}
                    className="text-gray-500 hover:text-red-500 text-2xl font-bold"
                >
                    ✕
                </button>

            </div>
        </div>
    )

}

export default ExpenseModal