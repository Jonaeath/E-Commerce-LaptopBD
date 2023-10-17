import React, { useEffect, useState } from "react";

const Cart = () => {
  const [orders, setOrders] = useState({});

  // This api use for load Order data
  useEffect(() => {
    fetch("http://localhost:4000/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch((error) => console.log(error));
  }, []);

// Remove data from cart 65.5
  const handelRemove = order =>{
    const agree = window.confirm(`Are You sure you want to remove: ${order.ProductsName}`);
    if(agree){
      // console.log('Remove Products with id:',order._id)
      fetch(`http://localhost:4000/orders/${order._id}`,{
        method:'DELETE',
      })
      .then(result => result.json())
      .then(data => {
        console.log(data)
        if(data.deletedCount > 0){
          alert('Your order remove successfully.')
          const remainingOrder = orders.filter(ord => ord._id !== order._id)
          setOrders(remainingOrder);
        }
      })

    }
  }

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name & Address</th>
              <th>Products Name</th>
              <th>Quantity & TPrice</th>
            </tr>
          </thead>
          <tbody>
            {
            orders?.length > 0 &&
              orders?.map((order, i) => (
                <tr key={order._id}>
                  <th>{i + 1}</th>
                  <td>
                    {order.customerName}
                    <br />
                    <span>{order.address}</span>
                  </td>
                  <td>{order.ProductsName}</td>
                  <td>
                    {order.quantity}
                    <br />
                    <span>${order.totalPrice}</span>
                  </td>
                  <th>
                    <button onClick={()=> handelRemove(order)} className="btn btn-success bg-lime-500 btn-xs">Remove</button>
                  </th>
                  <th>
                    <button className="btn btn-success bg-lime-500 btn-xs">Payment</button>
                  </th>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
