import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CardList = () => {
  const [products, setProducts] = useState([]); 
  const [searchTerm, setSearchTerm] = useState(''); 


  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/carts');
     
      const allProducts = response.data.carts.flatMap(cart => cart.products);
      setProducts(allProducts); 
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts(); 
  }, []);

 
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className=''>
    <div className="flex justify-center items-center p-5 bg-gray-100">
  <input 
    type="text"
    placeholder="Search products by name..."
    value={searchTerm}
    onChange={handleSearch}
    className="mb-4 p-3 border border-gray-300 rounded-lg text-center bg-blue-500 bg-opacity-50 text-white placeholder-white focus:bg-opacity-70 focus:outline-none"
  />
</div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {filteredProducts.map((product, index) => (
          <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={product.thumbnail} alt={product.title} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{product.title}</div>
              <ul>
                <li className="text-gray-700 text-base"><strong>Price:</strong> ${product.price}</li>
                <li className="text-gray-700 text-base"><strong>Quantity:</strong> {product.quantity}</li>
                <li className="text-gray-700 text-base"><strong>Total:</strong> ${product.total}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardList;
