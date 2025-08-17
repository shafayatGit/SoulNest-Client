import React, { useEffect, useState } from "react";
import { Outlet } from "react-router";
import Navbar from "../assets/Shared/Navbar/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "../assets/Shared/Footer/Footer";

const MainLayout = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 2 seconds
    const timer = setTimeout(() => setIsLoading(false), 2000);

    return () => clearTimeout(timer); // Cleanup if unmounted
  }, []);
  return (
    <div>
      {isLoading ? (
        <div className=" max-w-6xl mx-auto w-full h-dvh flex justify-center items-center">
          <div class="loader"></div>
        </div>
      ) : (
        <div>
          <Toaster position="top-right" reverseOrder={false} />
          <Navbar></Navbar>
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
      )}
    </div>
  );
};

export default MainLayout;
