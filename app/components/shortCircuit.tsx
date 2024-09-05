import React from 'react'

export const ShortCircuit = () => {
    const [isLoaded, setIsLoaded] = React.useState(false)
    const [data, setData] = React.useState("")

    
  return (
    <div className='outer flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6'>
    <div className='bg-white p-8 rounded-lg shadow-lg'>
        <h1 className='text-3xl font-bold text-center mb-4'>Short Circuit Evaluation</h1>
        <p className='text-lg text-center mb-4'>
            {isLoaded ? "You are logged IN" : "Kindly Sign UP"}
        </p>
        <h1 className='text-xl text-center mb-4'>
            {data ? "AssAM-O-ALIKUM" : ""}
        </h1>
    </div>
    <div className='mt-6'>
        <button 
            className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mx-2'
            onClick={() => setIsLoaded(!isLoaded)}
        >
            Toggle Login State
        </button>
        <button 
            className='bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 mx-2'
            onClick={() => setData("ansar")}
        >
            Set User
        </button>
        <button 
            className='bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 mx-2'
            onClick={() => setData("")}
        >
            Clear User
        </button>
    </div>
</div>
  )
}
