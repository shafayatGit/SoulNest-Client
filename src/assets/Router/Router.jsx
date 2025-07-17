import { createBrowserRouter } from "react-router";
import MainLayout from "../../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Registration from "../Authentication/Registration/Registration";
import Login from "../Authentication/Login/Login";

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