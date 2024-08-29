import React from "react"
import Test from "./components/Test";


const App = () => {
    const testData = [
        { age: 25, message: "Hello World!", phone: "123-456-7890" },
        { age: 30, message: "React is fun!", phone: "234-567-8901" },
        { age: 35, message: "Happy coding!", phone: "345-678-9012" },
        { age: 40, message: "Stay curious!", phone: "456-789-0123" },
        { age: 45, message: "Keep learning!", phone: "567-890-1234" },
        { age: 50, message: "Never give up!", phone: "678-901-2345" },
        { age: 55, message: "Success is near!", phone: "789-012-3456" },
        { age: 60, message: "Reach your goals!", phone: "890-123-4567" },
        { age: 65, message: "Stay motivated!", phone: "901-234-5678" },
        { age: 70, message: "Enjoy life!", phone: "012-345-6789" },
    ];

    return (
        <div >
            {testData.map((data, index) => (
                <Test  
                    key={index} 
                    age={data.age} 
                    message={data.message} 
                    phone={data.phone} 
                />
            ))}
        </div>
    );
};

export default App;
