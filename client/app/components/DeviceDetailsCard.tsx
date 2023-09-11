import React from "react";
import { Text, View } from "./Themed";

export const DeviceDetailsCard = (device: {
  icon: string;
  nickname: string;
  code: string;
}) => {
  return (
    <View className="bg-[#DAE3E8] p-4 w-80 rounded-[30px] px-5 my-3">
      <View className="flex flex-row items-center bg-[#DAE3E8]">
        <View className="flex items-center justify-center mr-4 rounded-xl bg-[#849087]">
          <Text className=" text-xl m-1">{device.icon}</Text>
        </View>

        <Text className="text-[#2F3C33] text-3xl">{device.nickname}</Text>
      </View>

      <View className="flex flex-row justify-around items-center bg-[#DAE3E8] mt-4">
        <View className=" my-2 bg-[#849087] rounded-[30px] w-20 text-center py-1 px-2">
          <Text className="text-gray-300">#{device.code}</Text>
        </View>

        <View className=" my-2 bg-[#849087] rounded-[30px] w-20 text-center py-1 px-2 flex flex-row  items-center">
          <View className="rounded-full bg-green-500 w-[5px] h-[5px]  text-3xl mr-2"></View>
          <Text className="text-gray-300">Healthy</Text>
        </View>
      </View>
    </View>
  );
};
