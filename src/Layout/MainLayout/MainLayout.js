import React from 'react';
import Navbar from '../../Pages/SharedFile/NavBar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../../Pages/SharedFile/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;