import React from "react";
import { Link } from "react-router-dom";

const DisplayProducts = ({ product }) => {
  const { _id ,name, img, price } = product;

  return (
    
      <div className="card bg-base-100 shadow-xl h-80">
        <figure>
          <img
            src={img}
            alt="Laptop"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">Used</div>
          </h2>
          <p>Price: ${price}</p>
          <div className="card-actions justify-end">
            <Link to = {`/orderbox/${_id}`}><button className="badge badge-outline hover:text-pink-600">Add to Cart</button></Link>
          </div>
        </div>
      </div>
  );
};

export default DisplayProducts;
