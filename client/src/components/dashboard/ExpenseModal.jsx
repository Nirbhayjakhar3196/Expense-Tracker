import { useState } from "react";
import Button from "../common/Button";

function ExpenseModal({onClose}){

    const[formData, setFormData] = useState({

        title:"",
        amount:"",
        category:"",
        date:"",
        notes:""
    })

    const handleChange = (e) => {

        const {name, value} = e.target;
        
        setFormData((prev)=> ({
            ...prev,
            [name] : value,
        }))

    }

    return(

        <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
            <div className="bg-white rounded-xl p-6 w-full max-w-xl max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center border-b pb-4 mb-6">

                <h2 className="text-2xl font-bold">
                    Add Expense
                </h2>

                <button
                    onClick={onClose}
                    className="text-gray-500 hover:text-red-500 transition-colors"
                >
                    ✕
                </button>

            </div>

                <div className="mb-5">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Expense Title
                    </label>

                    <input 
                    type="text"
                    name= "title"
                    placeholder="e.g :- Gaming, Shopping"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 mb-4"
                     />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                    type="number"
                    name= "amount"
                    placeholder="e.g :- 3000, 5000"
                    value={formData.amount}
                    onChange={handleChange}
                    className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 mb-4"
                     />


                    <select 
                    name= "category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 mb-4"
                     >

                     <option value="">
                        Select Category
                     </option>

                     <option value="Food">
                        Food
                    </option>

                    <option value="Shopping">
                        Shopping
                    </option>

                    <option value="Travel">
                        Travel
                    </option>

                    <option value="Bills">
                        Bills
                    </option>

                    <option value="Entertainment">
                        Entertainment
                    </option>

                    </select>

                    </div>


                    <input 
                    type="date"
                    name= "date"
                    placeholder=""
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 mb-4"
                     />


                    <textarea 
                    name= "notes"
                    rows="4"
                    placeholder="Add note"
                    value={formData.notes}
                    onChange={handleChange}
                    className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 mb-4"
                     />

                     {/* <div className="flex justify-end gap-4 mt-8">

                        <Button
                            variant="secondary"
                            onClick={onClose}
                        >
                            Cancel
                        </Button>

                        <Button>
                            Save Expense
                        </Button>

                    </div> */}
                                        
                    
                </div>

                

            </div>
        </div>
    )

}

export default ExpenseModal