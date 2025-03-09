import { createBrowserRouter } from "react-router-dom";
import DashboardOne from "../components/DashboardOne";
import DashboardTwo from "../components/DashboardTwo";
import Sidebar from "../components/Sidebar";
const Router = createBrowserRouter([
  {
    path: "/weather-dashboard",
    element: <Sidebar />,
    children: [
      {
        path: "dashboard-1",
        element: <DashboardOne />,
      },
      {
        path: "dashboard-2",
        element: <DashboardTwo />,
      },
    ],
  },
]);

export default Router;
