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
   <div className=" bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <div className="relative">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={`${movie.title} Poster`}
          className="w-full h-48 md:h-60 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-70"></div>
      </div>
      <div className="p-4">
        
        <h2 className="text-lg font-semibold text-red-500 mb-2">{movie.title}</h2>
        <p className="text-gray-300 text-sm md:text-base line-clamp-3">{movie.overview}</p>
        <Link to={`/`}> back </Link>
      </div>
    </div>
  );
}
