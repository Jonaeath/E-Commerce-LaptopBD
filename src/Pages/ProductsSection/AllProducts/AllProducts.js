import React, { useEffect, useState } from "react";
import DisplayProducts from "./DisplayProducts";
import { Link } from "react-router-dom";
import './AllProducts.css';

const AllProducts = () => {
  const [products, setProducts] = useState({});
  const [count, setCount] = useState(0);
  const [page, setPages] = useState(0);
  const [size, setSize] = useState(7)

  // get all data from Mongodb database with server
  useEffect(() => {
    const url = `http://localhost:4000/products?page=${page}&size=${size}`
    fetch(url)
      .then((res) => res.json())
      .then((data) =>{
        setCount(data.count)
        setProducts(data.products);
      })
      .catch((error) => console.log(error));
  }, [page,size]);

  const pages = Math.ceil(count/size);

  // Data Select category wise
  // https://www.youtube.com/watch?v=gPH7sCyXFb4
  const filterResult = (catItem)=>{
    const result = products?.filter((currentData)=>{
          return currentData.category === catItem;
    })
     setProducts(result)
  }

  return (
    <div>
      <div className="flex justify-center">
        <div className="tabs mt-5 bg-lime-500">
          <Link>
          <button onClick={()=>filterResult('MacBook')} className="tab tab-bordered text-bold text-xl text-white hover:text-pink-600">MacBook</button>
          </Link>
          <Link>
          <button onClick={()=>filterResult('Dell')} className="tab tab-bordered text-bold text-xl text-white hover:text-pink-600">Dell</button>
          </Link>
          <Link>
          <button onClick={()=>filterResult('Hp')} className="tab tab-bordered text-bold text-xl text-white hover:text-pink-600">Hp</button>
          </Link>
          <Link>
          <button onClick={()=>setProducts(products)} className="tab tab-bordered text-bold text-xl text-white hover:text-pink-600">All Products</button>
          </Link>
      </div>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-5">
        {
        products?.length > 0 &&
          products?.map((product) => (
            <DisplayProducts
              key={product._id}
              product={product}
            ></DisplayProducts>
          ))}
      </div>
      <div className='pagination'>
                {   
                    products?.length > 0 &&
                    [...Array(pages).keys()].map(number =><button
                    key={number}
                    className={page === number && 'selected'}
                    onClick={()=>setPages(number)}
                    >
                     {number + 1}   
                    </button>)
                }
                <select onChange={event => setSize(event.target.value)}>
                  <option value="4">4</option>
                  <option value="6">6</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                </select>
            </div>
    </div>
  );
};

export default AllProducts;
