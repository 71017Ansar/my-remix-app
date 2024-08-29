import React, { useEffect, useState } from 'react';
import rain from '../my-app/app/rain.png'
import cloud from '../my-app/app/cloud.png'
import drizzle from '../my-app/app/drizzle.png'
import search from '../my-app/app/search.png'
import snow from '../my-app/app/snow.png'
import wind from '../my-app/app/wind.png'

export const Weather = () => {
  const [weather, setWeather] = useState(); 



  const search = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_APP_ID}&units=metric`; 
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);

     

    
      
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  useEffect(() => {
    search('London'); 
  }, []); 

  return <div className="flex justify-center items-center min-h-screen bg-purple-200">
  <div className="flex flex-col justify-center items-center p-6 bg-blue-700 rounded-3xl w-80">
    

    <div className="flex justify-center items-center mb-6 w-full">
      <input 
        type="text" 
        placeholder="Search" 
        className="p-2 rounded-l-full w-full text-gray-700 focus:outline-none" 
      />
      <button className="rounded-r-full bg-white p-2 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m1.41-1.41A7.5 7.5 0 1117.5 10a7.5 7.5 0 011.66 14.34z" />
        </svg>
      </button>
    </div>


    <div className="flex flex-col justify-center items-center mb-6">
      <img className="h-20 mb-4" src={rain} alt="Rain Icon" />
      <h1 className="text-6xl text-white font-bold">21°C</h1>
      <h1 className="text-3xl text-white mt-2">London</h1>
    </div>

    
    <div className="flex justify-between items-center w-full text-white">
      <div className="flex flex-col items-center">
        <img className="h-8 mb-2 " src="https://static-00.iconduck.com/assets.00/humidity-icon-2048x1675-xxsge5os.png" alt="Humidity Icon" />
        <p className="text-lg">67%</p>
        <span className="text-sm">Humidity</span>
      </div>
      <div className="flex flex-col items-center">
        <img className="h-8 mb-2" src={wind} alt="Wind Icon" />
        <p className="text-lg">2.06 km/h</p>
        <span className="text-sm">Wind Speed</span>
      </div>
    </div>
  </div>
</div>
};



