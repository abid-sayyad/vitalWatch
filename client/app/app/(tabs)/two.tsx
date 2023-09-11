import { StyleSheet } from "react-native";

import EditScreenInfo from "../../components/AddDeviceScreen";
import { Text, View } from "../../components/Themed";
import { DeviceDetailsCard } from "../../components/DeviceDetailsCard";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Feather } from "@expo/vector-icons";

export default function TabTwoScreen() {
  const TEST_USER = { nickname: "Rob Shaw", icon: "👨🏻", code: "16423" };
  return (
    <View style={styles.container}>
      <DeviceDetailsCard showDetails={true} {...TEST_USER} />
      <View className="mt-2" style={styles.grid}>
        <View style={styles.column}>
          <View className="bg-[#18585C] h-28 flex flex-row items-center justify-center  m-1 rounded-xl p">
            <Text className="text-[35px] text-[#DAE3E8] mr-3">95</Text>
            <FontAwesome name="heartbeat" size={24} color="#DAE3E8" />
          </View>
          <View className="bg-[#18585C] h-28 flex flex-row items-center justify-center  m-1 rounded-xl p">
            <Text className="text-[35px] text-[#DAE3E8] mr-3">95</Text>
            <FontAwesome name="heartbeat" size={24} color="#DAE3E8" />
          </View>
        </View>
        <View style={styles.column}>
          <View className="bg-[#18585C] h-28 flex flex-row items-center justify-center  m-1 rounded-xl p">
            <Text className="text-[35px] text-[#DAE3E8] mr-3">95</Text>
            <FontAwesome name="heartbeat" size={24} color="#DAE3E8" />
          </View>
          <View className="bg-[#18585C] h-28 flex flex-row items-center justify-center  m-1 rounded-xl p">
            <Text className="text-[35px] text-[#DAE3E8] mr-3">95</Text>
            <FontAwesome name="heartbeat" size={24} color="#DAE3E8" />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  grid: {
    flexDirection: "row", // To create a horizontal layout
    flexWrap: "wrap", // Allows items to wrap to the next row
  },
  column: {
    width: "50%", // Two columns in a row, adjust as needed
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
