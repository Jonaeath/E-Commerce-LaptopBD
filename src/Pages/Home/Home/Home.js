import React from "react";
import Banner from "../Banner/Banner";
import SideBar from "../Banner/SideBar/SideBar";
import AddForLaptop from "../AddForLaptop/AddForLaptop";
import AllProducts from "../../ProductsSection/AllProducts/AllProducts";

const Home = () => {
  return (
    <div className="ml-20 mr-20 mt-10 mb-10">
      <div className="flex">
        <div className="flex-auto pr-5 w-1/4"><SideBar/></div>
        <div className="flex-auto w-3/4"><Banner/></div>
      </div>
      <div className="pt-11">
      <AddForLaptop/>
      </div>
      <div>
        <AllProducts/>
      </div>
    </div>
  );
};
export default Home;
