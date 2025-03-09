import { LineChart } from "@mui/x-charts/LineChart";

const pData = [15, 14, 16, 13];
const xLabels = ["Morning", "Afternoon", "Evening", "Night"];

export default function TinyLineChart() {
  return (
    <LineChart
      leftAxis={null}
      bottomAxis={{ disableLine: true, disableTicks: true }}
      xAxis={[
        {
          scaleType: "point",
          data: xLabels,
        },
      ]}
      margin={{
        left: 50,
        right: 50,
        top: 40,
        bottom: 40,
      }}
      series={[
        {
          data: pData,
        },
      ]}
    />
  );
}
