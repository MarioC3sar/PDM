import Linha1 from "@/app/(tabs)/linha1";
import { Stack } from "expo-router";
import { View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Home" }} />

      <Linha1 />
    </View>
  );
}
const styles = { container: { flex: 1 } };
