import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../assets/Shared/Navbar/Navbar';
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    return (
        <div>
            <Toaster position="top-right" reverseOrder={false} />
            <Navbar></Navbar>
            <Outlet></Outlet>
            <h1>Footer</h1>
        </div>
    );
};

export default MainLayout;