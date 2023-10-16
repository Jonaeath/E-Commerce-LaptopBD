import React from "react";

const OrdersData = ({order}) => {
    const {ProductsName} = order;
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Name</th>
            <th>Products Name</th>
            <th>Quantity & TPrice</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td>
              <div className="flex items-center space-x-3">
                <div>
                  <div className="font-bold">customerName</div>
                  <div className="text-sm opacity-50">address</div>
                </div>
              </div>
            </td>
            <td>{ProductsName}</td>
            <td>Purple</td>
            <th>
              <button className="btn btn-ghost btn-xs">details</button>
            </th>
            <th>
              <button className="btn btn-ghost btn-xs">details</button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrdersData;
