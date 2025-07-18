import { createBrowserRouter } from "react-router";
import MainLayout from "../../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Registration from "../Authentication/Registration/Registration";
import Login from "../Authentication/Login/Login";
import ContactUs from "../Pages/Contact Us/ContactUs";
import AboutUs from "../Pages/About Us/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children:[
        {
            path:"/",
            Component: Home
        },
        {
            path:"/aboutUs",
            Component: AboutUs
        },
        {
            path:"/contactUs",
            Component: ContactUs
        },
        {
            path:"/register",
            Component: Registration
        },
        {
            path:"/login",
            Component: Login
        }
    ]
  },
]);

export default router;