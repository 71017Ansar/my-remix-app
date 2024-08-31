// import React, { useEffect, useState } from 'react'
// import Products from './Product'

// const Project = () => {

//     const [products ,setProducts]=useState([])
//     const fetchProducts=async ()=>{
//         const res =await fetch('https://dummyjson.com/products')
//         const data =await res.json()
//         setProducts(data.products)
//         }
// useEffect(() => {
//     fetchProducts()
  

  
// }, [])




//   return (
//     <div className='h-screen w-screen px-4'>
//         <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full h-full justify-center items-center gap-4 '>
//             {
//                 products.map((item:any, index) => (
//                     <Products key={index}  imgg={item.thumbnail}  title={item.title} price={item.price} tags={item.tags}/>
//                 ))
//             }
//         </div>
//     </div>
//   )
// }

// export default Project