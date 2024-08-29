// import React, { useState } from "react";
// import Card from "~/components/Card";
// // import IContact Interface
// // import contacts
// import contacts from "~/data/contacts";
// const App = () => {
//   const [count, setCount] = useState(0);
//   const [name, setname] = useState(["hammad", "ali", "khan"]);
//   const student = [
//     {
//       name: "hammad",
//       age: 21,
//     },
//     {
//       name: "ali",
//       age: 16,
//     },
//     {
//       name: "khan",
//       age: 15,
//     },
//     {
//       name: "Ansar",
//       age: 19,
//     },
//     {
//       name: "javed",
//       age: 40,
//     },
//   ];

//   return (
//     // <Card  contact = {dummyContact}/>

//     <div>
//       {/* <div className="grid grid-rows-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
//             {contacts.map((obj, index) => (
//                 index<=4 &&
//                 <div key={index}>
//                     <Card contact={obj} />
//                 </div>
//                 ))}

//         </div>
//         <div>
//             <button onClick={() => setCount(count + 1)}>Increment</button>

//           <div>
//           <button onClick={() => setCount(count - 1)}>deccrement</button>
//           </div>
//             <h1>{count}</h1>

//         </div>
            
//            <h1>{name[count]}</h1>

//  */}

//       <div className="space-y-4">
//         {student.map((data, i) =>
//           data.age >= 18 ? (
//             <div key={i} className="bg-red-500">
//               <h1>above</h1>

//               <h1>{data.name}</h1>
//               <h1>{data.age}</h1>
//               <h1>{i + 1}</h1>
//             </div>
//           ) : (
//             ""
//           )
//         )}
//       </div>
//     </div>
//   );
// // };
// // export default App;
// import React from "react";
// // import RecipeList from "~/components/Recipe";
// const App = () =>{
//   return(
//     <div className="flex flex-col items-center justify-center h-screen">
//     <RecipeList />

//   </div>
//   )
// }
  

