import * as React from "react";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { ColorSchemeName } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { useNavigation } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import TabThreeScreen from "../screens/TabThreeScreen";
import FlightDetails from "../screens/FlightDetails";
import MyFlights from "../screens/MyFlights";
import Flights from "../screens/Flights";
import { RootStackParamList } from "../types";

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStackScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="MyFlights" component={MyFlights} />
        <Stack.Screen name="FlightDetails" component={FlightDetails} />
        <Stack.Screen name="Flights" component={Flights} />
        <Stack.Screen name="TabTwoScreen" component={TabTwoScreen} />
        <Stack.Screen name="TabThreeScreen" component={TabThreeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStackScreen;
