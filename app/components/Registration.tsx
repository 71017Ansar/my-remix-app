import React from 'react';
import { useState } from 'react';


const Registration = () => {
    const [user, setUser] = useState({
        username: "",
        password: "",
        confirmPassword: "",
        email: "",
        phone_number: ""
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    const handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(user);
        // Handle form submission logic here
    };
    return (
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4">Registration</h1>
            <div className="mb-4">
                <label className="block text-gray-700">Username:</label>
                <input
                    type="text"
                    name="username"
                    value={user.username}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Password:</label>
                <input
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Confirm Password:</label>
                <input
                    type="password"
                    name="confirmPassword"
                    value={user.confirmPassword}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Email:</label>
                <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Phone Number:</label>
                <input
                    type="tel"
                    name="phone_number"
                    value={user.phone_number}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                    required
                />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                Register
            </button>
        </div>
    );
};

export default Registration;
