import React from 'react';
import Seriesdata from './Seriesdata.json';

import { Cardnetflix } from './Cardnetflix'; 


export const Cardlist = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {Seriesdata.map((item, index) => (
        <Cardnetflix
          key={index}
          // id={item.id}
          // originalTitle={item.movie}
          // overview={item.overview}
          // imageUrl={item.imdb_url} 
          {...item}
        />
      ))}
    </div>
  );
};
