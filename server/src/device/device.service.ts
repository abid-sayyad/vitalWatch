import { errors } from "../errors/error.constants";
import { DatabaseService } from "../services/database.service";

export const AddDevice = async (
  deviceID: string,
  deviceAlias: string,
  weight: number,
  height: string,
  age: number,
  bloodGroup: string
) => {
  const db = await DatabaseService.getInstance().getDb("devices", "vitalWatch");
  const userExists = await db.findOne({
    deviceID: deviceID,
  });
  if (userExists) {
    throw errors.USER_ALREADY_EXIST;
  } else {
    await db.insertOne({
      deviceID: deviceID,
      deviceAlias: deviceAlias,
      weight: weight,
      height: height,
      age: age,
      bloodGroup: bloodGroup,
      status: false,
      heartBeat: [],
      airQuality: [],
    });
  }
};

export const DeviceData = async (
  deviceID: string,
  heartBeat: string,
  airQuality: string,
  temprature: number,
  humidity: string,
  location: object
) => {
  const db = await DatabaseService.getInstance().getDb("devices", "vitalWatch");
  const userExists = await db.findOne({
    deviceID: deviceID,
  });
  if (!userExists) {
    throw errors.USER_NOT_FOUND;
  } else {
    const tempratureStatus =
      temprature > 92 && temprature < 95
        ? "low"
        : temprature > 99
        ? "high"
        : "normal";

    const airQualityIndex = parseInt(airQuality) < 150 ? "Good" : "Poor";
    if (
      userExists?.heartBeat.length > 10 ||
      userExists?.airQuality.length > 10
    ) {
      await db.updateOne(
        { deviceID: deviceID },
        { $pop: { heartBeat: -1, airQuality: -1 } }
      );
    }
    await db.updateOne(
      { deviceID: deviceID },
      {
        $set: {
          temprature: temprature,
          humidity: humidity,
          location: location,
          status: true,
          tempratureStatus: tempratureStatus,
          airQualityIndex: airQualityIndex,
        },
        $push: {
          heartBeat: heartBeat,
          airQuality: airQuality,
        },
      }
    );
  }
};

export const getDeviceData = async (userString: string) => {
  const db = await DatabaseService.getInstance().getDb("devices", "vitalWatch");
  let userData;
  const userExists = await db.findOne({
    deviceID: userString,
  });
  if (userExists || userString === "all") {
    if (userString === "all") {
      userData = await db.find({}).toArray();
    } else {
      userData = await db.find({ deviceID: userString }).toArray();
    }

    return userData;
  } else {
    throw errors.USER_NOT_FOUND;
  }
};
