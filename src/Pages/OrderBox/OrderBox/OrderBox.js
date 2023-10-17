import React, { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { authContext } from "../../../Context/AuthProvider/AuthProvider";

const OrderBox = () => {
  const {user} = useContext(authContext)  
  const { _id, name, img ,price } = useLoaderData();
  const navigate = useNavigate()

  const handelBuyNow = event =>{
    event.preventDefault();
    const form = event.target;
    const customerName = form.customerName.value;
    const phoneNumber = form.phoneNumber.value;
    const address = form.address.value;
    const quantity = form.quantity.value;
    const email = user?.email || "unregister";
    
    const totalPrice = price*quantity;
    
    const order = {
        productsId: _id,
        ProductsName:name,
        customerName,
        address,
        quantity,
        totalPrice,
        email,
        phoneNumber,
    }

    if(phoneNumber.length > 10){
        alert('Your Phone number is valid')
    }
    else{
        alert('Phone number should ba 10 characters or longer');
    }
    
//    Data send to Back-end and back-end send data mongo server,order data or information 67.5 lecture
       fetch('http://localhost:4000/orders',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(order)
    }) 
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.acknowledged){
            alert("Your Order is placed successfully")
            
        }
        form.reset()
        navigate('/dashboard') 
    })
    .catch(error =>console.error(error))
  }

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-center pb-3 text-bold text-2xl">{name}</h1>
            <img src={img} className="pb-2" alt="" />
            <div className="form-control text-center pb-2 text-bold text-red-700 text-2xl">
                <p>Price: ${price}</p>

              </div>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handelBuyNow} className="card-body">
            <h1 className="text-center mt-3 text-bold text-2xl text-red-700">Customer Details</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name='customerName'
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
              <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input
                  name='phoneNumber'
                  type="number"
                  placeholder="Phone Number"
                  className="input input-bordered"
                  required
              />
                
              </div>
              <div className="form-control">
              <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <input
                  name='address'
                  type="text"
                  placeholder="address"
                  className="input input-bordered"
                  required
              />    
              </div>
              <div className="form-control">
              <label className="label">
                  <span className="label-text">Quantity</span>
                </label>
                <input
                  name='quantity'
                  type="number"
                  placeholder="quantity"
                  className="input input-bordered"
                  required
              />    
              </div>
              <div className="form-control text-center text-bold text-2xl">
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  defaultValue={user?.email}
                  disabled
              />    
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-success bg-lime-500">Buy Now</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderBox;
