import React from "react";
import { getMinerService } from "../services";
import { DeviceDataType } from "../types";

type PropT = {
  id: string;
};

const Miner: React.FC<PropT> = ({ id }) => {
  const [Data, setData] = React.useState<DeviceDataType>();
  const getData = async () => {
    const data = await getMinerService(id);
    console.log({ data });
    // setData(data?.data as DeviceDataType[]);
  };
  React.useEffect(() => {
    getData();
  }, []);
  return <div> {id}</div>;
};

export default Miner;
