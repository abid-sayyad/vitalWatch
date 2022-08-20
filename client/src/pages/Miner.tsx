import React from "react";

type PropT = {
  id: string;
};

const Miner: React.FC<PropT> = ({ id }) => {
  return <div>'Miner number: ' {id}</div>;
};

export default Miner;
