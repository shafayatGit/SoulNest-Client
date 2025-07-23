import { createBrowserRouter } from "react-router";
import MainLayout from "../../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Registration from "../Authentication/Registration/Registration";
import Login from "../Authentication/Login/Login";
import ContactUs from "../Pages/Contact Us/ContactUs";
import AboutUs from "../Pages/About Us/AboutUs";
import PrivateRoute from "../Routes/PrivateRoute";
import DashboardLayout from "../Pages/Dashboard/DashboardLayout/DashboardLayout";
import EditBiodata from "../Pages/Dashboard/EditBiodata/EditBiodata";
import BiodatasPage from "../Pages/Biodatas/BiodatasPage";
import BiodataDetails from "../Pages/Biodatas/BiodataDetails";
import ViewBiodata from "../Pages/Dashboard/ViewBiodatas/ViewBiodata";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/Allbiodata",
        Component: BiodatasPage,
      },
      {
        path: "/biodata/:id",
        Component: BiodataDetails,
      },
      {
        path: "/aboutUs",
        Component: AboutUs,
      },
      {
        path: "/contactUs",
        Component: ContactUs,
      },
      {
        path: "/register",
        Component: Registration,
      },
      {
        path: "/login",
        Component: Login,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children:[
        {
            path:"editBiodata",
            Component: EditBiodata,
        },
        {
            path:"viewBiodata",
            Component: ViewBiodata,
        }
    ]
  },
]);

export default router;
