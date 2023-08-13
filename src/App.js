import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainRoot from "./Pages/MainRoot";
import HomePage from "./Pages/HomePage";
import Villages from "./Pages/Villages";
import Elnady from "./Pages/Elnady";
import Shops from "./Pages/Shops";
import Hospitals from "./Pages/Hospitals";
import AboutVillage from "./Pages/AboutVillage";
import RateVillage from "./Pages/RateVillage";
import Schools from "./Pages/Schools";
import Industry from "./Pages/Industry";
import LinkOfCrafts from "./Pages/LinkOfCrafts";
import Ambulances from "./Pages/Ambulances";
import ErrorPage from "./Pages/Error";
import Clinecs from "./Pages/Clinecs";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainRoot />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <HomePage /> },
        {
          path: "/villages",
          element: <Villages />,
        },
        {
          path: "/elnady",
          element: <Elnady />,
        },
        {
          path: "/shops",
          element: <Shops />,
        },
        {
          path: "/hospitals",
          element: <Hospitals />,
        },
        {
          path: "/aboutvillage",
          element: <AboutVillage />,
        },
        {
          path: "/ratevillage",
          element: <RateVillage />,
        },
        {
          path: "/school",
          element: <Schools />,
        },
        {
          path: "/industry",
          element: <Industry />,
        },
        {
          path: "/craft",
          element: <LinkOfCrafts />,
        },
        {
          path: "/ambulance",
          element: <Ambulances />,
        },
        {
          path: "/clinecs",
          element: <Clinecs />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
