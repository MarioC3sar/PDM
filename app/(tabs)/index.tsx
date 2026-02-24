import Linha1 from "@/app/(tabs)/linha1";
import { Stack } from "expo-router";
export default function HomeScreen() {
  return (
  <>
    <Stack.Screen options = {{title:"Home"}}/>
    <Linha1 />
    </>
    );
}