import React from "react";
import { Link, Route } from "wouter";
import { DeviceDataType } from "../../types/types";

const DashboardCard: React.FC<DeviceDataType> = (props) => {
  const { _id, deviceAlias, deviceID, status } = props;
  return (
    <Link href={status ? `/miner/${deviceID}` : "/"} className="">
      <div className={`${status}`}>
        <div
          className={`flex-col flex  p-4 border rounded-md main cursor-pointer`}
        >
          <h1 className="text-2xl ">{deviceAlias}</h1>
          <h2>ID: {deviceID}</h2>
          <span className=" flex items-center justify-start">
            Device is{" "}
            {status ? (
              <Status status={"online"} key={deviceID} />
            ) : (
              <Status status={"offline"} key={deviceID} />
            )}
          </span>
          <span className=" flex items-center justify-start">
            Status : <Status status={"good"} key={deviceID} />
          </span>
        </div>
      </div>
    </Link>
  );
};

const Status: React.FC<{
  status: "good" | "warn" | "danger" | "online" | "offline";
}> = ({ status }) => {
  return (
    <>
      {status === "good" && (
        <>
          <div className=" flex items-center justify-center mx-2 h-[0.5rem] w-[0.5rem] rounded-full bg-green-500"></div>
          <p className="text-green-500">Good</p>
        </>
      )}
      {status === "warn" && (
        <>
          <div className=" flex items-center justify-center mx-2 h-[0.5rem] w-[0.5rem] rounded-full bg-yellow-500"></div>
          <p className="text-yellow-500">Near danger</p>
        </>
      )}
      {status === "danger" && (
        <>
          <div className=" flex items-center justify-center mx-2 h-[0.5rem] w-[0.5rem] rounded-full bg-red-500"></div>
          <p className="text-red-500">Danger</p>
        </>
      )}
      {status === "online" && (
        <>
          <div className=" flex items-center justify-center mx-2 h-[0.5rem] w-[0.5rem] rounded-full bg-blue-500"></div>
          <p className="text-blue-500">Online</p>
        </>
      )}
      {status === "offline" && (
        <>
          <div className=" flex items-center justify-center mx-2 h-[0.5rem] w-[0.5rem] rounded-full bg-gray-500"></div>
          <p className="text-gray-500">Offline</p>
        </>
      )}
    </>
  );
};
export default DashboardCard;
