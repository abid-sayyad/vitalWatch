import React from "react";
import { toast } from "react-hot-toast";
import { toastConfig } from "../config";
import { addDeviceService } from "../services/device";

const Device: React.FC = () => {

  const submitHandler = async (e: any) => {
    try {
      e.preventDefault();
      const formData = {
        deviceID: e.target.elements.id.value,
        deviceAlias: e.target.elements.alias.value,
        weight: e.target.elements.height.value,
        height: e.target.elements.weight.value,
        age: e.target.elements.age.value,
        bloodGroup: e.target.elements.bloodGroup.value,
      };
      toast.promise(
        addDeviceService(formData, e),
        {
          loading: "Saving Device...",
          success: "Saved Device !",
          error: "Failed to save Device",
        },
        toastConfig
      );
   
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form
      onSubmit={(e) => submitHandler(e)}
      className=" border-gray-400 border-2  rounded-lg  mx-auto sm:mt-[5rem] p-2.5 w-[90vw] sm:w-[600px] mt-[3rem] "
    >
      <h1 className="text-2xl my-2 font-semibold mb-6">＋ Add a Device</h1>
      <div className="mb-6">
        <label
          htmlFor="id"
          className="block mb-2 text-sm font-medium  text-gray-300"
        >
          Device ID <Required />
        </label>
        <input
          type="text"
          id="id"
          className="border text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-mainHighlight focus:border-mainHighlight"
          placeholder="VitalWatch device id "
          required
        />
      </div>

      <div className="mb-10">
        <label
          htmlFor="alias"
          className="block mb-2 text-sm font-medium  text-gray-300"
        >
          Device Alias <Required />
        </label>
        <input
          type="text"
          id="alias"
          className="border text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-mainHighlight focus:border-mainHighlight"
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
              Height (in m) <Required />
            </label>
            <input
              type="number"
              min={0}
              id="height"
              className="border text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-mainHighlight focus:border-mainHighlight"
              placeholder="52 meters"
            />
          </div>
          <div className="ml-5 ">
            <label
              htmlFor="weight"
              className="block mb-2 text-sm font-medium  text-gray-300"
            >
              Weight (in kg) <Required />
            </label>
            <input
              type="number"
              min={0}
              id="weight"
              className="border text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-mainHighlight focus:border-mainHighlight"
              placeholder="77 kg"
            />
          </div>
        </div>
        <div className="flex mt-2">
          <div className="">
            <label
              htmlFor="age"
              className="block mb-2 text-sm font-medium  text-gray-300"
            >
              Age <Required />
            </label>
            <input
              type="number"
              min={0}
              id="age"
              className="border text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-mainHighlight focus:border-mainHighlight"
              placeholder="33 years old"
            />
          </div>
          <div className="ml-5 ">
            <label
              htmlFor="bloodGroup"
              className="block mb-2 text-sm font-medium  text-gray-300"
            >
              Blood Group <Required />
            </label>
            <select
              name="bloodGroup"
              id="bloodGroup"
              defaultValue={"O-"}
              className="w-[180px] border text-sm rounded-lg  block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-mainHighlight focus:border-mainHighlight px-2"
            >
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
            </select>
          </div>
        </div>
      </div>
      <button className="mt-10 border text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-slate-300 hover:text-white cursor-pointer focus:ring-mainHighlight focus:border-mainHighlight">
        Submit form
      </button>
    </form>
  );
};

const Required = () => {
  return <sup className="text-mainHighlight text-[0.85rem]">*</sup>;
};
export default Device;
