import React, { useState } from "react";
import { Button, Pressable, StyleSheet, TextInput } from "react-native";

import Colors from "../constants/Colors";
import { ExternalLink } from "./ExternalLink";
import { MonoText } from "./StyledText";
import { Text, View } from "./Themed";

export default function AddDeviceScreen({ path }: { path: string }) {
  const [deviceIcon, setDeviceIcon] = useState("");
  const [deviceNickname, setDeviceNickname] = useState("");
  const [deviceId, setDeviceId] = useState("");

  const handleSubmit = () => {
    // Handle form submission here, e.g., send data to a server or perform some action
    console.log("Device Icon:", deviceIcon);
    console.log("Device Nickname:", deviceNickname);
    console.log("Device ID:", deviceId);

    // Clear the form fields
    setDeviceIcon("");
    setDeviceNickname("");
    setDeviceId("");
  };
  return (
    <View>
      <View className="">
        <TextInput
          className="rounded-full p-1 bg-gray-300 w-[30px] h-[30px] flex items-center justify-center"
          value={deviceIcon}
          onChangeText={(text) => setDeviceIcon(text)}
          placeholder="📦"
        />
        <Text className="text-lg mt-4 ">Device Nickname</Text>
        <TextInput
          className="text-lg  "
          value={deviceNickname}
          onChangeText={(text) => setDeviceNickname(text)}
          placeholder="Enter Device Nickname"
        />
        <Text className="text-lg mt-4 ">Device ID</Text>
        <TextInput
          value={deviceId}
          className="text-lg  "
          onChangeText={(text) => setDeviceId(text)}
          placeholder="Enter Device ID"
        />
        <Pressable
          className=" rounded-xl bg-[#2F3C33] flex items-center m-3 mt-6 p-3"
          onPress={handleSubmit}
        >
          <Text className="text-lg text-white "> Add Device</Text>
        </Pressable>
      </View>
    </View>
  );
}
