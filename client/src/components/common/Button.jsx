

function Button ({children , onClick , variant="primary"}){

    const baseStyle =
        "px-5 py-3 rounded-lg font-semibold transition-all duration-300 cursor-pointer";

    const variants = {

        primary: "bg-green-600 text-white hover:bg-green-700",

        secondary: "bg-gray-200 text-gray-700 hover:bg-gray-300",

        danger: "bg-red-600 text-white hover:bg-red-700"

    }

    return(

        <button
            onClick={onClick}
            className={`${baseStyle} ${variants[variant]}`}
        >
            
            {children}

        </button>
    )
    
}

export default Button;