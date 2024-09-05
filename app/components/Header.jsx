import React from 'react'

export const Header = () => {
  return (
    <div className="flex justify-between items-center px-10 py-6 p-10   bg-gray-900 text-white shadow-lg">
    <div className="">
      <h1 className="text-2xl font-bold tracking-wide text-red-700">CollEGEFLIX</h1>
    </div>
    <div className="flex space-x-6">
      <input 
        type="text" 
        placeholder="Search" 
        className="px-4 py-2 rounded-lg bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
      />
      <button className="px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 transition duration-300">
        TV Series
      </button>
      <button className="px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 transition duration-300">
        WATCH MOVIES
      </button>
    </div>
  </div>
  )
}
