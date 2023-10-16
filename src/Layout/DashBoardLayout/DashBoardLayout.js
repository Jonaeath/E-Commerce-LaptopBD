import React from "react";
import { useState } from "react";
import Cart from "../../Pages/DashBoard/Cart/Cart";
import AllUsers from "../../Pages/DashBoard/Users/AllUsers";

const DashBoardLayout = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  return (
      <div>
        <div className="space-x-4 text-center pt-2">
          <button
            onClick={() => handleTabChange(1)}
            className={`${
              activeTab === 1 ? " bg-lime-500 text-white" : "bg-gray-300"
            } px-4 py-2 rounded-md`}
          >
            CART
          </button>
          <button
            onClick={() => handleTabChange(2)}
            className={`${
              activeTab === 2 ? " bg-lime-500 text-white" : "bg-gray-300"
            } px-4 py-2 rounded-md`}
          >
            AllUsers
          </button>
        </div>
        {activeTab === 1 && (
          <div>
            <Cart />
          </div>
        )}
        {activeTab === 2 && (
          <div>
            <AllUsers />
          </div>
        )}
      </div>
  );
};

export default DashBoardLayout;
