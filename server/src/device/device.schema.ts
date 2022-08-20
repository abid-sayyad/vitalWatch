import * as yup from "yup";

export const AddDeviceRequestSchema = yup.object({
  deviceID: yup.string().trim().required("DeviceId is required"),
  deviceAlias: yup.string().trim().required("Device Alias is required"),
  weight: yup.number().required("Worker weight is Required"),
  height: yup.number().required("Worker height is required"),
  age: yup.number().required("Worker age is Required"),
});

export type AddDeviceRequest = yup.InferType<typeof AddDeviceRequestSchema>;
