import React from "react";
import { getMinerService } from "../services";
import { DeviceDataType } from "../types/types";
import MapEmbed from "../components/Map/index";
import ChartEmbed from "../components/Chart";

type PropT = {
  id: string;
};

const Miner: React.FC<PropT> = ({ id }) => {
  const [data, setData] = React.useState<DeviceDataType | null>(null);

  const getData = async () => {
    const res = await getMinerService(id);
    setData(res?.data[0] as DeviceDataType);
    console.log({ main: res?.data[0] });
  };

  React.useEffect(() => {
    getData();
    setInterval(() => {
      getData();
    }, 3000);
    //cleanup
    return () => clearInterval();
  }, []);

  return (
    <div className="mx-3  flex items-center flex-col">
      <div className=" mt-5 mx-10 rounded border border-cyan-600 px-10 sm:w-[600px] mb-5">
        <div className="flex items-center justify-between w-full pl-0 ml-0 ">
          <div className=" p-4 py-2  w-fit text-slate-200 m-2 text-left pl-0 ml-0">
            <h1 className="text-3xl text-mainHighlight font-bold text-left pl-0 ml-0">
              {data?.deviceAlias}
            </h1>
            <p className="text-lg py-2 text-slate-200 text-left pl-0 ml-0">
              ID: {data?.deviceID}
            </p>{" "}
          </div>
          <div>
            {data?.status ? (
              <div className="flex items-center ">
                <div className=" flex items-center justify-center mx-2 h-[1rem] w-[1rem] rounded-full bg-green-500"></div>
                <p className="text-green-500 text-2xl">Online</p>
              </div>
            ) : (
              <div className="flex items-center">
                <div className=" flex items-center justify-center mx-2 h-[1rem] w-[1rem] rounded-full bg-gray-500"></div>
                <p className="text-gray-500 text-2xl">Offline</p>
              </div>
            )}
          </div>
        </div>
        <div className="grid   grid-cols-2 mb-4">
          <div className={`text-slate-200 text-lg`}>
            Blood Group: {data?.bloodGroup}
          </div>
          <div className={`text-slate-200 text-lg`}>Age : {data?.age}</div>
          <div className={`text-slate-200 text-lg`}>
            Height: {data?.height} m
          </div>
          <div className={`text-slate-200 text-lg`}>
            Weight: {data?.weight} Kg
          </div>
          <div className={`text-slate-200 text-lg `}>
            Heart Beat: {data?.heartBeat[data?.heartBeat?.length - 1]} ppm
          </div>
          <div className={`text-slate-200 text-lg `}>
            Humidity: {data?.humidity}
          </div>
          <div className={`text-slate-200 text-lg`}>
            Temprature: {data?.temprature} °C
            {data?.tempratureStatus === "high" && (
              <span className="px-3 text-red-500">(High)</span>
            )}
          </div>
          <div className={`text-slate-200 text-lg `}>
            Air Quality: {data?.airQuality[data?.airQuality?.length - 1]} ppm
            {data?.airQualityIndex === "Poor" && (
              <span className="px-3 text-red-500">(Poor)</span>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center sm:flex-row  mb-4 ">
        <div className=" w-fit bg-gray-100 rounded my-2 sm:mx-2 mx-1">
          <ChartEmbed
            label="Heartbeat"
            unit="bpm"
            data={data?.heartBeat || [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}
          />
        </div>
        <div className=" w-fit bg-gray-100 rounded my-2  sm:mx-2 mx-1">
          <ChartEmbed
            label="Air Quality"
            unit="ppm"
            data={data?.airQuality || [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}
          />
        </div>
      </div>
      <div className="w-fit mx-auto rounded">
        <MapEmbed x={data?.location?.longitude} y={data?.location?.latitude} />
      </div>
    </div>
  );
};

export default Miner;
