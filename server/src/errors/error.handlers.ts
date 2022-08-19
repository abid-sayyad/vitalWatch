import { NextFunction, Request, Response } from "express";

const errorHandler =
  () => (err: Error | any, req: Request, res: Response, next: NextFunction) => {
    if (err?.errorCode) {
      res.status(err.errorCode).json({
        success: false,
        message: `ErrorName: ${err.status}`,
      });
    } else {
      res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  };

export default errorHandler;
