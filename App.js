const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Splashscreen from "./screens/Splashscreen";
import Home from "./screens/Home";
import Browse from "./screens/Browse";
import Profil from "./screens/Profil";
import NotifikasiIcon from "./screens/NotifikasiIcon";
import Konfirmasi from "./screens/Konfirmasi";
import Checkout from "./screens/Checkout";
import DataDiri from "./screens/DataDiri";
import Produkdetail from "./screens/Produkdetail";
import Login from "./screens/Login";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);
  const [fontsLoaded] = useFonts({
    Inter: require("./assets/fonts/Inter.ttf"),
    "IBM Plex Sans Condensed": require("./assets/fonts/IBM_Plex_Sans_Condensed.ttf"),
  });

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 3000);
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Splashscreen"
              component={Splashscreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Browse"
              component={Browse}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profil"
              component={Profil}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Notifikasi"
              component={NotifikasiIcon}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Konfirmasi"
              component={Konfirmasi}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Checkout"
              component={Checkout}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DataDiri"
              component={DataDiri}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Produkdetail"
              component={Produkdetail}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <Splashscreen />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
