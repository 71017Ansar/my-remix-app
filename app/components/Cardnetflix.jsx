import React from 'react';
import { Link } from "@remix-run/react";



export const Cardnetflix = ({ id, overview, title ,poster_path }) => {
 
  return (
    <div className=" bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <div className="relative">
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={`${title} Poster`}
          className="w-full h-48 md:h-60 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-70"></div>
      </div>
      <div className="p-4">
        
        <h2 className="text-lg font-semibold text-red-500 mb-2">{title}</h2>
        <p className="text-gray-300 text-sm md:text-base line-clamp-3">{overview}</p>
        <Link to={`/movies/${id}`}> watch now </Link>
      </div>
    </div>
  );
};
