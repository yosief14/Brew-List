import * as React from "react";
import { TamaguiProvider } from 'tamagui'
import config from './tamagui.config'
import { InventoryProvider } from "./context/InventoryContextProvider";
import { ShoppingListContextProvider } from "./context/ShoppingListContextProvider";
import TabBar from "./components/TabBar";
import {
  View,
  Text,
  Image,
  Dimensions,
  Button,
} from "react-native";

import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import DashboardScreen from "../test-app/screens/DashboardScreen";
import InventoryScreen from "./screens/InventoryScreen";
import ShoppingListScreen from "./screens/ShoppingListScreen";
import HeaderLogo from "./components/Header";

const Screen = Dimensions.get("screen").width;



const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "black",
    primary: "#f4f5f7",

    text: "#000",
  },
};

const Tab = createBottomTabNavigator();

const tabScreenOptions = {
  tabBarStyle: {


    backgroundColor: "black",

    tabBarBackground: () => <View style={{ backgroundColor: "red" }} />, // Use the style prop to set the background color
  },
  headerStyle: {
    backgroundColor: "black",
    height: 90,
  },

};

function App() {
  return (
    <ShoppingListContextProvider>
      <InventoryProvider>
        <TamaguiProvider config={config}>
          <NavigationContainer theme={MyTheme}>

            <Tab.Navigator initialRouteName="Home" screenOptions={tabScreenOptions} >
              <Tab.Screen
                name="Home"
                component={DashboardScreen}
                options={{ headerTitle: () => <HeaderLogo title={"Dashboard"} /> }}
              />
              <Tab.Screen
                name="Inventory"
                component={InventoryScreen}
                options={{ headerTitle: () => <HeaderLogo title={"Inventory"} /> }}
              />
              <Tab.Screen
                name="Shopping List"
                component={ShoppingListScreen}
                options={{ headerTitle: () => <HeaderLogo title={"Shopping List"} /> }}
              />
            </Tab.Navigator>
          </NavigationContainer>
        </TamaguiProvider>
      </InventoryProvider>
    </ShoppingListContextProvider>
  );
}

export default App;

// Property 'props' is missing in type '{ layout: Layout; options: BottomTabNavigationOptions; route: RouteProp<ParamListBase>; navigation: BottomTabNavigationProp<ParamListBase, string, undefined>; }' but required in type '{ props: any; }'.ts(2741)
