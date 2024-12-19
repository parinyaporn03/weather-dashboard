import Compass from "../assets/cardinal-points.png";
import Pressure from "../assets/barometer.png";
import { Progress } from "antd";
import type { MenuProps, TabsProps } from "antd";
const twoColors = {
  "0%": "#48B27F",
  "40%": "#F4F77E",
  "70%": "#FD8237",
  "100%": "#FD673D",
};
const weather = [
  {
    time: "01PM",
    weather: "☀️",
    celsius: "26°",
  },
  {
    time: "02PM",
    weather: "☀️",
    celsius: "25°",
  },
  {
    time: "03PM",
    weather: "🌥️",
    celsius: "25°",
  },
];
const weather_week = [
  {
    day: "Tomorrow",
    month: "12 Apr",
    celsius: "16°",
    weather: "☀️",
  },
  {
    day: "Monday",
    month: "13 Apr",
    celsius: "15°",
    weather: "🌥️",
  },
  {
    day: "Tuesday",
    month: "14 Apr",
    celsius: "14°",
    weather: "🌥️",
  },
  {
    day: "Wednesday",
    month: "15 Apr",
    celsius: "14°",
    weather: "☁️",
  },
  {
    day: "Thursday",
    month: "16 Apr",
    celsius: "16°",
    weather: "☀️",
  },
  {
    day: "Friday",
    month: "17 Apr",
    celsius: "16°",
    weather: "☀️",
  },
  {
    day: "Saturday",
    month: "18 Apr",
    celsius: "12°",
    weather: "⛈️",
  },
];

const box_data = [
  {
    head: "Today wind speed",
    sub: "12km/h",
    img: () => <img src={Compass} className="w-20" />,
  },
  {
    head: "Rain Chanse",
    sub: "Today rain chanse",
    img: () => (
      <Progress
        type="circle"
        percent={30}
        size={85}
        strokeColor="#165694"
        format={() => "Low"}
      />
    ),
  },
  {
    head: "Pressure",
    sub: "Today pressure",
    img: () => <img src={Pressure} className="w-20 " />,
  },
  {
    head: "UV Index",
    sub: "Today UV Index",
    img: () => (
      <Progress
        type="dashboard"
        percent={100}
        strokeColor={twoColors}
        size={85}
        format={() => "Low"}
      />
    ),
  },
];
const items: MenuProps["items"] = [
  {
    key: "1",
    label: "Notification1",
  },
  {
    key: "2",
    label: "Notification2",
  },
  {
    key: "3",
    label: "Notification3",
  },
];
const options = [
  { value: "Texas" },
  { value: "Floida" },
  { value: "New York" },
];
const home_items: TabsProps["items"] = [
  {
    key: "1",
    label: "Today",
  },
  {
    key: "2",
    label: "Week",
  },
];

export default {
  twoColors,
  weather,
  weather_week,
  box_data,
  items,
  options,
  home_items,
};
