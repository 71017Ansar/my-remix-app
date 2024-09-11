//   import React from 'react';


// // //    const testData = [
// // //         { age: 25, message: "Hello World!", phone: "123-456-7890" },
// // //         { age: 30, message: "React is fun!", phone: "234-567-8901" },
// // //         { age: 35, message: "Happy coding!", phone: "345-678-9012" },
// // //         { age: 40, message: "Stay curious!", phone: "456-789-0123" },
// // //         { age: 45, message: "Keep learning!", phone: "567-890-1234" },
// // //         { age: 50, message: "Never give up!", phone: "678-901-2345" },
// // //         { age: 55, message: "Success is near!", phone: "789-012-3456" },
// // //         { age: 60, message: "Reach your goals!", phone: "890-123-4567" },
// // //         { age: 65, message: "Stay motivated!", phone: "901-234-5678" },
// // //         { age: 70, message: "Enjoy life!", phone: "012-345-6789" },
// // //     ];

// // //     const App= () => {
// // //     return(
// // //         <div>
// // //             {testData.map((data, index) => (
// // //                 <Test 
// // //                     key={index} 
// // //                     age={data.age} 
// // //                     message={data.message} 
// // //                     phone={data.phone} 
// // //                 />
// // //             ))}
// // //         </div>
// // //     );
// // // };


  
// // import React from "react";
// // import Alertbutton from "~/components/Eventhandling";
// // import RecipeList from "~/components/Recipe"; 
// // import Student from "~/components/State";
// // import { useState } from "react";

// // import RandomColorName from "~/components/Randomcolor";
// // import Caculator from "~/components/Caculator";
// // import Userref from "~/components/Useref"

// // // import { json, useLoaderData } from "@remix-run/react";

// // const App= () => {

// //         // const products = useLoaderData<typeof loader>();

// //         // console.log(`This is the App Component ${products.length}   `)

// //         return(
// //                 <div>
// //                       <Datafetch /> 
// //                 </div>
// //             );
            
// //     };
    
// // //      export default App

// // //      export const loader = async () => {

// // //         console.log('loader function called ')

// // //         return json([
// // //           { id: "1", name: "Pants" },
// // //           { id: "2", name: "Jacket" },
// // //         ]);
// // //       };
// // routes/_index.tsx

// import { json } from "@remix-run/node";
// import { useLoaderData } from "@remix-run/react";
// import { ImageCard} from "~/components/ImageCard";
// import { cardList } from '~/data/contacts';
// // import Datafetch from "~/components/TestApi";
// // import { TodoApp } from "~/components/TodoApp";
// import  {Weather} from "~/components/Weather"
// import { ImageModel } from '~/types/RemixType';
// import Project from '~/components/Project';
// import { Toggle } from '~/components/Toogle';
// import Registration from './Registration';
// import Registrationfrom from 'RegistrationForm';


// export const loader = async () => {
 
//   return json({ message: "Welcome to my Remix app!" });
// };

// export default function Index() {
//   const data = useLoaderData();

// //   const imageModel : ImageModel = {
// //     "img_url": "https://cdn.pixabay.com/photo/2024/08/22/05/03/ai-generated-8988244_640.jpg",
// //     "likes": 123,
// //     "views": 343,
// //     "tags" :[]
// // }


// // create a list of 5 objects of ImageModel



//   return (
//     <div className="container">
//           <Registrationfrom>
//             {(user, handleInputChange) => (
//                 <Registration user={user} handleInputChange={handleInputChange} />
//             )};
//         </Registrationfrom>


    
//     </div>


    
//     // //  {/* <Datafetch/> */}
//     // //  {/* <TodoApp/> */}
//     // //  {/* <Weather/> */}


//     // {/* {
//     //   cardList.map((item, index) => {
//     //     return (
//     //       <div key={index}>
//     //         <ImageCard data={item} />
//     //         </div>
//     //         )
//     //         })
            
//     // }
//     //  */}






//     //       {/* <ImageCard  data={imageModel}  /> */}

//           // {
//         // data.map((current)=>{
              
          
//             // <Project/>
//             // <Toggle/>
            


// // const App = () => {
// //     return (
   



     
    
    
    
//   );
// }
// routes/_index.tsx or routes/index.tsx
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import {MyHeader} from "~/components/MyHeader"; 
import{ MyFotter }from "~/components/MyFotter";
import { MyHero } from "~/components/MyHero";









export const loader = async () => {
    // Any data fetching logic here
    return json({}); // Returning an empty object as this example doesn't fetch any data
};

export default function Index( ) {
    const data = useLoaderData();
    const user={
      title: 'LEARNING with RTEACT',
    subtitle: 'We are a team of passionate developers.',
    image: 'https://www.budventure.technology/public/frontend/images/blog/react_benefits_blog4.png',
      
    }


    return (
        <div>
            <MyHeader/>
            <MyHero {...user}/>
      
            <MyFotter/>


          
    
            </div>
    )
    
       
}



