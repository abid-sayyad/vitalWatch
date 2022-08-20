import React from "react";

const Device: React.FC = () => {
  return (
    <form className="border border-gray-400 border-2  rounded-lg w-[600px] mx-auto sm:mt-[5rem] p-2.5">
      <h1 className="text-2xl my-2 font-semibold mb-6">＋ Add a Device</h1>
      <div className="mb-6">
        <label
          htmlFor="id"
          className="block mb-2 text-sm font-medium  text-gray-300"
        >
          Device ID <sup className="text-mainHighlight text-[0.85rem]">*</sup>
        </label>
        <input
          type="text"
          id="id"
          className="border text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
          placeholder="VitalWatch device id "
          required
        />
      </div>

      <div className="mb-10">
        <label
          htmlFor="alias"
          className="block mb-2 text-sm font-medium  text-gray-300"
        >
          Device Alias{" "}
          <sup className="text-mainHighlight text-[0.85rem]">*</sup>
        </label>
        <input
          type="text"
          id="alias"
          className="border text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
          placeholder="Michael Scarn "
          required
        />
      </div>

      <div className="mb-6 ">
        <h2 className="text-gray-300">Health Info</h2>
        <div className="flex mt-2">
          <div className="">
            <label
              htmlFor="height"
              className="block mb-2 text-sm font-medium  text-gray-300"
            >
              Height (in m)
            </label>
            <input
              type="number"
              min={0}
              id="height"
              className="border text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
              placeholder="52 meters"
            />
          </div>
          <div className="ml-5 ">
            <label
              htmlFor="weight"
              className="block mb-2 text-sm font-medium  text-gray-300"
            >
              Weight (in kg)
            </label>
            <input
              type="number"
              min={0}
              id="weight"
              className="border text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
              placeholder="77 kg"
            />
          </div>
        </div>
      </div>
      <button className="mt-10 border text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-slate-300 hover:text-white cursor-pointer focus:ring-blue-500 focus:border-blue-500">
        Submit form
      </button>
    </form>
  );
};

export default Device;
