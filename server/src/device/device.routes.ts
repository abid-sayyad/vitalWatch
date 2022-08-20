import { NextFunction, Request, Response, Router } from "express";
import validateQuery from "../middlewares/validate-query";
import {
  AddDeviceRequest,
  AddDeviceRequestSchema,
  DeviceDataRequest,
  DeviceDataRequestSchema,
} from "./device.schema";
import { AddDevice, DeviceData, getDeviceData } from "./device.service";

const router = Router();

const handleData = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { deviceID, heartBeat, airQuality, temprature, humidity, location } =
      req.body as DeviceDataRequest;
    await DeviceData(
      deviceID,
      heartBeat,
      airQuality,
      temprature,
      humidity,
      location
    );
    res.status(200).json({
      status: `Date Updated at ${Date.now()}`,
    });
  } catch (err) {
    next(err);
  }
};
const handleUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userSlug } = req.params;
    const data = await getDeviceData(userSlug);
    res.status(200).json({ data: data });
  } catch (err) {
    next(err);
  }
};

const handleAddDevice = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { deviceID, deviceAlias, weight, height, age, bloodGroup } =
      req.body as AddDeviceRequest;
    await AddDevice(deviceID, deviceAlias, weight, height, age, bloodGroup);
    res.status(201).json({
      success: true,
      status: `${deviceID} Successfully Added`,
    });
  } catch (err) {
    next(err);
  }
};

router.post(
  "/add",
  validateQuery("body", AddDeviceRequestSchema),
  handleAddDevice
);

router.post(
  "/data",
  validateQuery("body", DeviceDataRequestSchema),
  handleData
);

router.get("/user/:userSlug", handleUsers);

export default router;
