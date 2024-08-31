import React from 'react'
import { ImageModel } from '~/types/RemixType'


interface  ImageCardProps{
    data : ImageModel,
}


export const ImageCard = (   {data }:ImageCardProps    ) => { 

const {img_url , views , likes } = data


    
return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
       
    
      <img className="w-full" src= {img_url} alt= "tag" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2"></div>
        <ul>
          <li className="text-gray-700 text-base">
            <strong>Views:</strong> 
            <span>232</span>
          </li>
          <li className="text-gray-700 text-base">
            <strong>Downloads:</strong> 
            <span>{likes}</span>

          </li>
          <li className="text-gray-700 text-base">
            <strong>Likes:</strong> 
            <span>{views}</span>
          </li>
        </ul>
      </div>
      <div className="px-6 pt-4 pb-2">
        
          <span
            
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            tags
          </span>
       
      </div>
    
  
</div>
  )
}


 
