import { MdOutlineDashboard, MdOutlineHome } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import Logo from "../assets/logo.png";

function Sidebar() {
  return (
    <div className="flex flex-col  lg:flex-row ">
      <nav className="sticky top-0 z-50 lg:z-0  bg-white lg:px-4 flex flex-row justify-center lg:justify-normal lg:flex-col items-center lg:w-fit lg:h-screen  lg:border-r-2 lg:shadow-xl border-b-2 lg:border-b-0">
        <div className=" py-4 flex px-4 items-center lg:w-full">
          <img src={Logo} className="w-10 rounded-full mr-2 " />
          <div className="text-lg text-[#2B95D1]">arekad</div>
        </div>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "active  lg:text-[#2B95D1] py-4 flex px-4 items-center justify-center lg:justify-start w-fit lg:w-full bg-[#d2e8fd] rounded-xl lg:bg-transparent lg:rounded-none"
              : "hover:bg-[#d2e8fd] lg:hover:bg-transparent lg:hover:text-[#2B95D1] py-4 flex  px-4 items-center lg:w-full  rounded-xl"
          }
        >
          <MdOutlineDashboard className="text-2xl" />
          <div className="lg:text-lg ml-3 ">Dashboard</div>
        </NavLink>
        <NavLink
          to="/news"
          className={({ isActive }) =>
            isActive
              ? "active  lg:text-[#2B95D1] py-4 flex px-4 items-center justify-center lg:justify-start w-fit lg:w-full bg-[#d2e8fd] rounded-xl lg:bg-transparent lg:rounded-none"
              : "hover:bg-[#d2e8fd] lg:hover:bg-transparent lg:hover:text-[#2B95D1] py-4 flex  px-4 items-center lg:w-full rounded-xl "
          }
        >
          <MdOutlineHome className="text-2xl" />
          <div className=" lg:text-lg ml-3">Home</div>
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default Sidebar;
