import { json } from "@remix-run/node";
import { useLoaderData, useParams } from "@remix-run/react";
import Seriesdata from '~/components/Seriesdata.json'; 
import { Link } from "@remix-run/react";


export async function loader({ params }) {
  console.log(params)
  const { id } = params;
  console.log(id)

  // Filter movie by id from the JSON data
  const movie = Seriesdata.find(movie => movie.id == id);
 

  if (!movie) {
    throw new Response("Movie not found", { status: 404 });
    console.log("error")
  }
 

  return json({ movie });
}


export default function MovieDetails() {
  const { movie } = useLoaderData();

  return (
    <div className="bg-gray-800 w-1/4  text-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <div className="relative flex flex-col justify-center items-center ">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={`${movie.title} Poster`}
          className="w-full h-48 sm:h-56 md:h-60 lg:h-72 object-cover transition-opacity duration-300 ease-in-out hover:opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80"></div>
      </div>
      <div className="p-4 flex flex-col justify-between h-full">
        <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-red-500 mb-2">
          {movie.title}
        </h2>
        <p className="text-gray-300 text-sm md:text-base lg:text-lg line-clamp-3 mb-4">
          {movie.overview}
        </p>
        <Link
          to={`/`}
          className="mt-auto inline-block text-center bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
        >
          Back
        </Link>
      </div>
    </div>
  );
}
