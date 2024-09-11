import React from 'react';
import { Link } from "@remix-run/react";



export const Cardnetflix = ({ id, overview, title ,poster_path }) => {
 
  return (
    <div className="bg-gray-800  text-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <div className="relative">
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={`${title} Poster`}
          className="w-full h-48 sm:h-56 md:h-60 lg:h-72 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80"></div>
      </div>
      <div className="p-4 flex flex-col justify-between">
        <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-red-500 mb-2">
          {title}
        </h2>
        <p className="text-gray-300 text-sm md:text-base lg:text-lg line-clamp-3 mb-4">
          {overview}
        </p>
        <Link
          to={`/movies/${id}`}
          className="mt-auto inline-block text-center bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
        >
          Watch Now
        </Link>
        <Link to={"/about"}>about</Link>
      </div>
    </div>
  );
};
 