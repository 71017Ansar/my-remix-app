import React from 'react'
import Seriesdata from './Seriesdata.json';

const DetailMovieCard = () => {

  return (
    <div>
        {
            Seriesdata.map((movie,i) => (
                movie.id==1252896 ?

                <h1 key={i}>h</h1> :
                <h1>no</h1>

            ))
            
        }

    </div>
  )
}

export default DetailMovieCard