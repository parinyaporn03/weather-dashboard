import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Dashboard";
import News from "../components/Home";
import Sidebar from "../components/Sidebar";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <Sidebar />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/news",
        element: <News />,
      },
    ],
  },
]);

export default Router;
