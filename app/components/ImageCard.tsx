import React from 'react'


export const ImageCard = () => { 
   
    
return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
       
    <>
      <img className="w-full" src="https://cdn.pixabay.com/photo/2024/08/22/05/03/ai-generated-8988244_640.jpg" alt= "tag" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2"></div>
        <ul>
          <li className="text-gray-700 text-base">
            <strong>Views:</strong> 
          </li>
          <li className="text-gray-700 text-base">
            <strong>Downloads:</strong> 
          </li>
          <li className="text-gray-700 text-base">
            <strong>Likes:</strong> 
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
    </>
  
</div>
  )
}


 
