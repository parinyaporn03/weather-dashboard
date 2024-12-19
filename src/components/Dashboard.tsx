import { AutoComplete, Avatar, Badge, Dropdown } from "antd";
import { IoSearch } from "react-icons/io5";
import { PiWind } from "react-icons/pi";
import { MdOutlineWaterDrop } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { AiOutlineUser } from "react-icons/ai";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5";
import Data from "../data/Data";
import "../styles/DashboardStyle.css";
import TinyLineChart from "./TinyLineChart";
import bg from "../assets/bg.jpg";
import Box from "../components/BoxDashboard";

function Dashboard() {
  return (
    <div className="w-full grid grid-cols-1 xl:grid-cols-3 xl:grid-rows-1">
      <div className="col-span-2 pt-8 px-10">
        <div className="flex items-center justify-between  ">
          <AutoComplete
            prefix={<IoSearch className="text-xl " />}
            className="dashsearch w-full "
            options={Data.options}
            placeholder="Search something heare..."
            filterOption={(inputValue, option) =>
              option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
              -1
            }
          />

          <Badge count={5} className="mx-3 cursor-pointer">
            <Dropdown menu={{ items: Data.items }} placement="bottom">
              <IoNotificationsOutline className="text-[28px]" />
            </Dropdown>
          </Badge>
          <div>
            <Avatar size={35} icon={<AiOutlineUser />} />
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className={`grid  lg:grid-cols-2 lg:grid-row-1 gap-4  p-4   mt-3 rounded-xl `}
        >
          <div className="p-2 flex flex-col justify-between ">
            <div className="flex justify-between items-center">
              <div className="flex items-center justify-center">
                <GrLocation className="mr-2 text-xl" />
                <div className="text-lg font-bold">New York</div>
              </div>
              <div>Today 00:32 PM</div>
            </div>
            <div className="flex flex-col justify-center items-center mt-4 ">
              <div className="text-7xl">14°</div>
              <div className="mt-2">Mostly Clear</div>
            </div>
            <div className="flex gap-4 mt-4 justify-between  ">
              <div className="flex">
                <PiWind className="text-xl" />
                <div className="ml-1">720hpa</div>
              </div>
              <div className="flex">
                <MdOutlineWaterDrop className="text-xl" />
                <div className="ml-1">32%</div>
              </div>
              <div className="flex">
                <PiWind className="text-xl" />
                <div className="ml-1">12km/h</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col bg-white/30  p-4 backdrop-blur-sm  rounded-xl ">
            <div className=" font-bold">Temperature° C</div>
            <div className="h-[200px] lg:flex-2">
              <TinyLineChart />
            </div>
          </div>
        </div>
        <div className="grid  grid-cols-2  gap-4  mt-4">
          <Box />
        </div>
      </div>

      <div className="border-l-2 border-gray-200 pt-8 px-10 flex flex-col jus">
        <div className="flex justify-center xl:justify-between items-center">
          <IoIosArrowBack />
          <div className="text-xl font-bold px-4 xl:px-0">This Week</div>
          <IoIosArrowForward />
        </div>

        <div className="py-2 font-bold text-lg">Today</div>

        <div className="grid grid-cols-4 gap-x-10 ">
          <div className="bg-[#C4E2FF] leading-10 h-fit p-1 flex flex-col justify-center items-center  rounded-xl">
            <div>Now</div>
            <div className="text-3xl">☀️</div>
            <div className="font-bold">24°</div>
          </div>
          {Data.weather.map((e, Index) => (
            <div
              key={Index}
              className="leading-10 h-fit p-1 flex flex-col justify-center items-center  rounded-xl"
            >
              <div>{e.time}</div>

              <div className="text-3xl">{e.weather}</div>
              <div className="font-bold">{e.celsius}</div>
            </div>
          ))}
        </div>

        <div className="mt-1">
          {Data.weather_week.map((e, Index) => (
            <div key={Index} className="grid grid-cols-3 py-[10px]">
              <div className="grid grid-row-3">
                <div className="font-bold ">{e.day}</div>
                <div className="text-gray-500">{e.month}</div>
              </div>
              <div className="font-bold flex justify-center">{e.celsius}</div>
              <div className="text-3xl flex justify-end">{e.weather}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
