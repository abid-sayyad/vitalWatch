import { ToastOptions } from "react-hot-toast";
export const API = process.env.REACT_APP_API as string;
export const toastConfig: ToastOptions = {
  style: { backgroundColor: "#374151", color: "#4FD1C5" },
};
