import Data from "../data/Data";

function BoxDashboard() {
  return (
    <>
      {Data.box_data.map((e, Index) => (
        <div
          key={Index}
          className="bg-[#ECF3F8] leading-[40px] rounded-xl flex  flex-col lg:flex-row lg:justify-between items-center p-4 px-10 gap-10"
        >
          <div className=" order-2 lg:order-1 flex flex-col justify-start items-center lg:items-start">
            <div className="font-bold">{e.head}</div>
            <div>{e.head}</div>
            <div className="font-bold">{e.sub}</div>
          </div>
          <div className=" order-1 lg:order-2 ">{e.img()}</div>
        </div>
      ))}
    </>
  );
}

export default BoxDashboard;
