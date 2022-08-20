import axios from "axios";
import { API, toastConfig } from "../config";
import { toast } from "react-hot-toast";

export const addDeviceService = async (formData: {
  deviceID: string;
  deviceAlias: string;
  weight: number;
  height: number;
  age: number;
  bloodGroup: "A+" | "A-" | "AB+" | "AB-" | "0+" | "O-" | "B-" | "B+";
}) => {
  try {
    const { data } = await axios.post(`${API}/device/add`, {
      ...formData,
    });
  } catch (error: any) {
    toast.error(error?.response?.data?.message, toastConfig);
    console.log("add device error ", error);
    throw error;
  }
};
