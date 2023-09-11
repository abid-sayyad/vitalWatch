import { StyleSheet } from "react-native";

import EditScreenInfo from "../../components/AddDeviceScreen";
import { Text, View } from "../../components/Themed";
import { DeviceDetailsCard } from "../../components/DeviceDetailsCard";

export default function TabOneScreen() {
  const DEVICES = [
    { nickname: "Rob Shaw", icon: "👨🏻", code: "16423" },
    { nickname: "Joe Doe", icon: "👨", code: "23423" },
    { nickname: "John Doe", icon: "🧔🏿‍♂️", code: "56623" },
  ];
  return (
    <View style={styles.container}>
      {DEVICES.map((device, _) => {
        return <DeviceDetailsCard key={_} {...device} />;
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
