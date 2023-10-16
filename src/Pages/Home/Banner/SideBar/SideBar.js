import React from "react";
import { Link } from "react-router-dom";
import './SideBar.css';

const SideBar = () => {
  return (
    <div className="container h-96 rounded-md text-center bg-lime-500">
      <h1 className="text-bold pt-10 text-3xl text-pink-600">LaptopBD</h1>
      <h3 className="underline underline-offset-8">Best Used Laptop Shop</h3>
      <div className="text-white pt-2 hover:text-pink-600">
        <Link>DashBoard</Link>
      </div>
      <div className="text-white pt-2 hover:text-pink-600">
        <Link>ALL Products</Link>
      </div>
      <div className="text-white pt-1 hover:text-pink-600">
        <Link>MacBook</Link>
      </div>
      <div className="text-white pt-1 hover:text-pink-600">
        <Link>Hp</Link>
      </div>
      <div className="text-white pt-1 underlineOne hover:text-pink-600">
        <Link>Dell</Link>
      </div>
      <div className="text-white pt-5 pb-2 hover:text-pink-600">
      <Link>
       Shoping Cart
      </Link>
      </div>
      <Link className="text-white hover:text-pink-600">SHOP NOW</Link>
    </div>
  );
};

export default SideBar;
