import * as yup from "yup";

export const AddDeviceRequestSchema = yup.object({
  deviceID: yup.string().trim().required("DeviceId is required"),
  deviceAlias: yup.string().trim().required("Device Alias is required"),
  weight: yup.number().required("Worker weight is Required"),
  height: yup.string().trim().required("Worker height is required"),
  age: yup.number().required("Worker age is Required"),
  bloodGroup: yup
    .string()
    .trim()
    .oneOf(["A+", "A-", "AB+", "AB-", "O+", "O-", "B-", "B+"])
    .required("Blood Group is Required"),
});

export type AddDeviceRequest = yup.InferType<typeof AddDeviceRequestSchema>;

export const DeviceDataRequestSchema = yup.object({
  deviceID: yup.string().trim().required("DeviceID is required"),
  heartBeat: yup.string().trim().required("HeartBeat is Required"),
  airQuality: yup.string().trim().required("airQuality is Required"),
  temprature: yup
    .number()
    .min(90)
    .max(107)
    .default(0)
    .required("Temprature is Required"),
  humidity: yup.string().trim().required("Humidity is Required"),
  location: yup.object({
    longitude: yup.string().required("Longitude"),
    latitude: yup.string().trim().required("Latitude is Required"),
    timestamp: yup.number().required("Time Stamp is required"),
  }),
});

export type DeviceDataRequest = yup.InferType<typeof DeviceDataRequestSchema>;
