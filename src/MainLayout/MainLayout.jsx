import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../assets/Shared/Navbar/Navbar';
import { Toaster } from 'react-hot-toast';
import Footer from '../assets/Shared/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <Toaster position="top-right" reverseOrder={false} />
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;