import React, { useEffect, useState } from "react";
import DashboardCard from "../components/DasboardCard/index";
import { getAllDevicesService } from "../services";
import { DeviceDataType } from "../types/types";
import Loading from "../components/Loading/index";

const Home: React.FC = () => {
  const [devices, setDevices] = useState<DeviceDataType[] | null>(null);
  const getDevices = async () => {
    const data = await getAllDevicesService();
    setDevices(data?.data as DeviceDataType[]);
  };
  useEffect(() => {
    getDevices();
  }, []);

  return (
    <div className="">
      <input
        type="search"
        placeholder="Search by ID"
        className="w-[300px] sm:w-[600px] sm:my-10 my-3 mx-auto border text-sm rounded-lg  block p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-mainHighlight focus:border-mainHighlight"
      />
      <section className="flex justify-center mb-10">
        <div className="text-xl">Filter:</div>
        <div className="flex justify-around">
          <div className="text-green-500 border border-green-500 rounded-full px-4  flex items-center justify-center mx-10">
            <h3 className="mx-2  text-lg">50</h3>
            <p className=" text-lg">Good</p>
          </div>
          <div className="text-red-500 border border-red-500 rounded-full px-4  flex items-center justify-center mx-10 ">
            <h3 className="mx-2 text-lg">1</h3>
            <p className=" text-lg">Danger</p>
          </div>
          <div className="text-blue-500   border border-blue-500 rounded-full px-4  flex items-center justify-center mx-10 ">
            <h3 className="mx-2 text-lg">12</h3>
            <p className=" text-lg">Online</p>
          </div>
          <div className="text-gray-500  border border-gray-500 rounded-full px-4  flex items-center justify-center mx-10 ">
            <h3 className="mx-2 text-lg">100</h3>
            <p className=" text-lg">Offline</p>
          </div>
        </div>
      </section>

      {devices ? (
        <section className="grid grid-cols-2 sm:grid-cols-5 col gap-10  mx-[5px] sm:mx-20">
          {devices?.map((device) => (
            <>
              <DashboardCard {...device} key={device._id} />
            </>
          ))}{" "}
        </section>
      ) : (
        <div className="w-10 mx-auto mt-10">
          <Loading />
        </div>
      )}
    </div>
  );
};

export default Home;
