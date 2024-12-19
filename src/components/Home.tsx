import { AutoComplete, Col, Row } from "antd";
import { IoSearch } from "react-icons/io5";
import PartlySunny from "../assets/partlycloudy.png";
import { LineChart } from "@mui/x-charts";
import Sunrise from "../assets/sunrise.png";
import Sunset from "../assets/sunset.png";
import { TbUvIndex, TbTemperature } from "react-icons/tb";
import { Tabs } from "antd";
import Data from "../data/Data";
import "../styles/DashboardStyle.css";
const pData = [1, 2, 3, 4];
const xLabels = ["1AM", "2AM", "3AM", "4AM"];

function News() {
  return (
    <div className="w-full p-4 px-10">
      <Row className="items-center">
        <Col span={20} className=" flex gap-x-4 text-lg">
          <Tabs
            defaultActiveKey="1"
            items={Data.home_items}
            className="custom-tabs"
          />
        </Col>
        <Col span={4}>
          <AutoComplete
            prefix={<IoSearch className="text-xl " />}
            className="border-1 shadow-xl w-full"
            options={Data.options}
            placeholder="Search "
            filterOption={(inputValue, option) =>
              option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
              -1
            }
          />
        </Col>
      </Row>

      <div className="flex flex-col justify-center items-center  md:justify-evenly md:items-start md:flex-row py-4 border-2 shadow-xl  rounded-xl">
        <div className="flex flex-col items-center lg:items-start">
          <div>
            <img src={PartlySunny} className="w-48" />
          </div>
          <div>2nd july</div>
          <div>Friday 12.00PM</div>
        </div>

        <div className="flex flex-col w-full mt-4 border-t-2 items-center p-2  md:w-fit md:mt-0 md:border-t-0  md:items-start md:p-0">
          <div className="text-3xl font-bold">31° C</div>
          <div>Partly Cloudy</div>
        </div>
        <div className="flex flex-col w-full mt-4 border-t-2 items-center p-2  md:w-fit md:mt-0 md:border-t-0  md:items-start md:p-0">
          <div>Humidity</div>
          <div>65%</div>
        </div>
        <div className="flex flex-col w-full mt-4 border-t-2 items-center p-2  md:w-fit md:mt-0 md:border-t-0  md:items-start md:p-0">
          <div>Wind</div>
          <div>10 km/h</div>
        </div>
        <div className="flex flex-col w-full mt-4 border-t-2 items-center p-2  md:w-fit md:mt-0 md:border-t-0  md:items-start md:p-0">
          <div>Precipition</div>
          <div>8%</div>
        </div>
      </div>
      <div className="my-6 text-2xl">Today's Highlights</div>

      <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-3 md:grid-rows-1 md:gap-7 lg:gap-10">
        <div className="col-span-2">
          <div className="grid grid-cols-3 grid-rows-1  gap-2 lg:gap-5">
            <div className="border-2 rounded-xl  w-full col-span-2 shadow-xl">
              <LineChart
                series={[{ data: pData }]}
                xAxis={[{ scaleType: "point", data: xLabels }]}
                height={180}
              />
            </div>

            <div className="flex gap-2 w-full flex-col md:justify-between lg:justify-normal lg:gap-0 md:flex-col ">
              <div className="border-2 rounded-xl p-4 w-full shadow-xl ">
                <div className="text-blue-500 text-lg ">Visibility</div>
                <div>3.0Km</div>
              </div>
              <div className=" flex xl:flex-row flex-col border-2 rounded-xl p-4 w-full   gap-5  lg:justify-between lg:gap-0 lg:mt-2 shadow-xl">
                <div>
                  <div className="text-blue-500 text-lg ">Air Quality</div>
                  <div>Unhealthy</div>
                </div>
                <div className="flex items-center text-red-400 text-wrap">
                  <div className=" text-2xl font-bold"> 119</div>
                  <div className="text-xs ml-2">ACM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-2 rounded-xl  w-full  leading-10 shadow-xl flex flex-col items-center md:items-start md:justify-around lg:justify-normal  p-4">
          <div className="text-blue-500 text-lg">Sunrise & Sunset</div>
          <div className="flex items-center py-4">
            <img src={Sunrise} className="w-12 md:w-14 lg:w-20 mr-2" />
            <div className="text-xl font-bold">6:18 am</div>
          </div>
          <div className="flex items-center">
            <img src={Sunset} className=" w-12 md:w-14 lg:w-20 mr-2" />
            <div className="text-xl font-bold">7:27 am</div>
          </div>
        </div>
      </div>

      <div className=" grid grid-cols-2 gap-6 mt-7">
        <div className="flex gap-4 ">
          <div className="shadow-xl p-4 rounded-xl border-2 bg-white lg:pr-20 w-full">
            <div className=" text-lg flex items-center ">
              Feels like{" "}
              <span>
                <TbTemperature className="ml-2" />
              </span>
            </div>
            <div className="font-bold text-xl lg:text-3xl">29° C</div>
          </div>
          <div className="shadow-xl p-4 rounded-xl border-2 bg-white lg:pr-20 w-full">
            <div className="text-lg flex items-center text-gray-500">
              UV Index
              <span>
                <TbUvIndex className="ml-2" />
              </span>
            </div>
            <div>0.02 in</div>
          </div>
        </div>
        <div className="">
          <div className="shadow-xl border-2 rounded-xl p-4 ">
            <div className="text-lg text-gray-500"> Barometric Pressure</div>
            <div className="mb-8"> 1050.24 hPa</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
