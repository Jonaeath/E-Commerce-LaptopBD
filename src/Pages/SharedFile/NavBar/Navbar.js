import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from '../../../Asset/Image/logo2.png';
import {FaUser} from "react-icons/fa";
import {FaShoppingCart} from "react-icons/fa";
import { authContext } from "../../../Context/AuthProvider/AuthProvider";


const Navbar = () => {

  const {user,logOut} = useContext(authContext)

  const handelSignOut = () =>{
    logOut()
    .then(()=> {})
    .catch(error => console.error(error))
  }

  const navItem = (
    <React.Fragment>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        {
          user?.email?
          <>
        <Link onClick={handelSignOut} to='/'><FaUser/>Sign Out</Link>
          </>
          :
          <Link to='/login'><FaUser/>Login</Link>

        }
      </li>
      <li>
        <Link to='/signup'>Sign Up</Link>
      </li>
      <li>
        <Link to='/dashboard'>Cart<span className="text-rose-700"><FaShoppingCart/></span></Link>
      </li>
    </React.Fragment>
  );

  return (
    <div className="navbar bg-lime-500">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItem}
          </ul>
        </div>
        <img className="h-20" src={logo} alt=""/>
        <h3 className="font-bold text-xl text-white">LAPTOP BD</h3>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItem}</ul>
      </div>
      <div className="navbar">
        <p className="pr-2">LaptopBD</p>
      <input type="text" placeholder="Search for Your Valuable Products" className="input input-bordered w-full"/>
      </div>
    </div>
  );
};

export default Navbar;
