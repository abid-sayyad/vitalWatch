import axios from "axios";
import { toast } from "react-hot-toast";
import { BloodGroupType, DeviceDataType } from "../types";
import { API, toastConfig } from "../config";

export const addDeviceService = async (
  formData: {
    deviceID: string;
    deviceAlias: string;
    weight: number;
    height: number;
    age: number;
    bloodGroup: BloodGroupType;
  },
  e: any
) => {
  try {
    const { data } = await axios.post(`${API}/device/add`, {
      ...formData,
    });
    if (data) {
      e?.target?.reset(); //reset form on success
    }
  } catch (error: any) {
    toast.error(error?.response?.data?.message, toastConfig);
    console.log("add device error ", error);
    throw error;
  }
};

export const getAllDevicesService = async () => {
  try {
    const res = await axios.get(`${API}/device/user/all`);
    return res?.data;
  } catch (error) {
    toast.error("Failed to fetch devices", toastConfig);
    console.log("get all devices error ", error);
  }
};

export const getMinerService = async (id: string) => {
  try {
    const res = await axios.get(`${API}/device/user/${id}`);
    console.log({ res });
    return res;
  } catch (error) {
    window.location.replace(`${window.location.origin}`);
    console.log("get miner data error ", error);
  }
};
