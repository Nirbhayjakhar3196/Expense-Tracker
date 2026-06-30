import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  return (
    <div className="bg-blue-100 min-h-screen flex justify-center items-center">
      <div className="bg-white w-full max-w-md text-center p-8 rounded-xl shadow-lg">
        <h1 className='text-3xl font-bold text-green-600'>
          Expense Tracker
        </h1>
        <p className='text-gray-500 mt-3'>
          Making our expense tracker app
        </p>
        <button className="bg-green-200 w-32 p-2.5 mt-3 rounded-2xl hover:bg-green-500 duration-300 cursor-pointer transition-all" >
          See Expenses
        </button>
      </div>
    </div>
  );
}

export default App;

