import React from 'react'
import { Link } from 'react-router-dom'


export const MyHeader = () => {
  return (
    
        <header className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg">
          <div className="container mx-auto flex items-center justify-between p-6">
            <div>
              <h1 className="text-3xl font-bold text-black">MUHAMMAD ANSAR</h1>
            </div>
            <nav className="bg-transparent">
              <ul className="flex space-x-8">
                <li>
                  <Link
                    to="/"
                    className="text-white text-lg font-medium hover:text-pink-200 transition duration-300"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="about"
                    className="text-white text-lg font-medium hover:text-pink-200 transition duration-300"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="Contact"
                    className="text-white text-lg font-medium hover:text-pink-200 transition duration-300"
                  >
                    Contect
                  </Link>
                </li>
                <li>
                  <Link
                    to="service"
                    className="text-white text-lg font-medium hover:text-pink-200 transition duration-300"
                  >
                    Service
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      );
    }
    
