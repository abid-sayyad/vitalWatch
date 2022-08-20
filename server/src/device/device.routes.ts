import { NextFunction, Request, Response, Router } from "express";
import { deflate } from "zlib";
import validateQuery from "../middlewares/validate-query";
import { AddDeviceRequest, AddDeviceRequestSchema } from "./device.schema";

const router = Router();

const handleAddDevice = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { deviceID, deviceAlias, weight, height, age } =
      req.body as AddDeviceRequest;
  } catch (err) {
    next(err);
  }
};

router.post(
  "/add",
  validateQuery("body", AddDeviceRequestSchema),
  handleAddDevice
);

export default router;
