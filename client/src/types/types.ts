export interface DeviceDataType {
  age: string;
  airQuality: Array<String>;
  bloodGroup: BloodGroupType;
  deviceAlias: string;
  deviceID: string;
  heartBeat: Array<String>;
  height: string;
  humidity: string;
  location: LoactionType;
  status: boolean;
  temprature: string;
  weight: string;
  _id: string;
  airQualityIndex: string;
  tempratureStatus: string;
}
export type LoactionType = {
  longitude: string;
  latitude: string;
  timestamp: number;
};

export type BloodGroupType =
  | "A+"
  | "A-"
  | "AB+"
  | "AB-"
  | "0+"
  | "O-"
  | "B-"
  | "B+";
