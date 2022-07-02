import { Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter";
import { useFonts } from "expo-font";
import { hideAsync, preventAutoHideAsync } from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import "react-native-gesture-handler";
import WidgetBtn from "./src/components/modules/WidgetBtn";
import { theme } from "./src/theme";

export default function App() {
  async () => {
    await preventAutoHideAsync();
  };

  const [fontLoaded, error] = useFonts({
    Inter_500Medium,
    Inter_400Regular,
  });

  if (!fontLoaded) return null;
  if (error) return <Text>Error: {error.message}</Text>;

  async () => {
    await hideAsync();
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
      }}
    >
      <StatusBar style="light" backgroundColor="transparent" translucent />

      <WidgetBtn />
    </View>
  );
}
