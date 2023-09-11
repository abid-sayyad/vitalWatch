import Image from "next/image";
import GridLines from "react-gridlines";
import { Inter } from "next/font/google";
import Select from "react-select";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const sendOptions = [
    {
      label: "/images/bitcoin.png",
      value: "Bitcoin",
    },
    {
      label: "/images/eth.svg",
      value: "Ethereum",
    },
    {
      label: "/images/polygon.png",
      value: "Polygon",
    },
    {
      label: "/images/usd-coin.png",
      value: "USDC",
    },
  ];

  const receiveOption = [
    {
      label: "/images/upi.png",

      value: "UPI",
    },
    {
      label: "/images/email.png",
      value: "Email",
    },
    {
      label: "/images/twitter.png",

      value: "Twitter",
    },
    {
      label: "/images/discord.png",
      value: "Discord",
    },
  ];

  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index + 1) % sendOptions.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [index]);
  return (
    <GridLines
      className="grid-area"
      cellWidth={100}
      strokeWidth={0.5}
      // cellWidth2={30}
      // strokeWidth2={0.25}
      lineColor={"#B6F72B"}
    >
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className} text-center`}
      >
        <div className="w-[80vw] h-[80vh] rounded-3xl bg-[#0A0A0A] border  border-neutral-800 flex items-center flex-col">
          <div className="w-[30rem]">
            <img
              src="/images/direct-pay.svg"
              alt="directpay"
              className=" mt-5 w-full"
            />

            <h2 className="text-2xl text-slate-100  mt-5 ">
              No Wallet | No Worries
            </h2>
            <p className="text-[#8d8d8d] mt-2">
              Send/Receive crypto assets instantly using an email address or
              Twitter handle. Now everyone can be a crypto owner!
            </p>
          </div>

          <div className="">
            <div className="text-4xl mt-20 font-semibold  text-gray-100 flex">
              Send{" "}
              <div className="w-[15rem] text-gray-200 flex items-center pb-2  border-b-[1px] border-[#B6F72B] mx-2 pr-3 font-light">
                {" "}
                <img
                  src={sendOptions[index].label}
                  className="h-[35px] w-[35px] rounded-full mx-3"
                  alt=""
                />
                {sendOptions[index].value}
              </div>{" "}
              and recieve in any
              <div className="w-[15rem] text-gray-200 flex items-center pb-2  border-b-[1px] border-[#B6F72B] mx-2 pr-3 font-light">
                {" "}
                <img
                  src={receiveOption[index].label}
                  className="h-[35px] w-[35px] rounded-full mx-3"
                  alt=""
                />
                {receiveOption[index].value}
              </div>{" "}
              address
            </div>

            <button className="bg-[#B6F72B] px-4 py-3 rounded-full text-neutral-900 text-3xl font-semibold mt-10">
              Coming Soon{" "}
            </button>
          </div>
        </div>
      </main>
    </GridLines>
  );
}
