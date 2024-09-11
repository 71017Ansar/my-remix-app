import React from 'react'

export const MyHero = ( {title, subtitle, image,} ) => {
    return (
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20 h-full ">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
            <div className="flex-1 mb-10 md:mb-0 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                MUHAMMAD ANSAR{title}
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">
               
              </h2>
              <p className="text-lg md:text-xl leading-relaxed mb-6">
                I am a React JSX developer and I am working on creating my website
                using React JSX. This showcases my knowledge of web development in
                JSX using Remix.{subtitle}
               
              </p>
            </div>
            <div className="flex-1 flex justify-center md:justify-end">
              <img
                src={image}
                alt="React JS Developer"
                className="w-full h-auto max-w-md rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      );
}
