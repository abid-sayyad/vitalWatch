import React from "react";
import { Link, Route } from "wouter";

type PropT = {
  id: string;
  alias: string;
  status: "good" | "warn" | "danger";
};

const DashboardCard: React.FC<PropT> = ({ status, id, alias }) => {
  return (
    <Link href={`/miner/${id}`} className="">
      <div className={`${status}`}>
        <div
          className={`flex-col flex  p-4 border rounded-md main cursor-pointer`}
        >
          <h1 className="text-2xl ">{alias}</h1>
          <h2>ID: {id}</h2>

          <span className=" flex items-center justify-start">
            Status: <Status status={status} />
          </span>
        </div>{" "}
      </div>
    </Link>
  );
};

const Status: React.FC<{ status: "good" | "warn" | "danger" }> = ({
  status,
}) => {
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
    </>
  );
};
export default DashboardCard;
