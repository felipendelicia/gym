import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../Screens/Home";
import Routines from "../../Screens/Routines";
import Progress from "../../Screens/Progress";
import theme from "../../theme";
import { Image, View, Text } from "react-native";
import { TabItem } from "./components";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: theme.color.black,
            borderTopColor: "#00000000", // Removing little white border in the top
            height: 100,
          },
          tabBarShowLabel: false,
          //headerShown: false,
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <TabItem
                  focused={focused}
                  name="Inicio"
                  icon={require("../../../assets/home.png")}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Routines"
          component={Routines}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <TabItem
                  focused={focused}
                  name="Rutinas"
                  icon={require("../../../assets/routine.png")}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Progress"
          component={Progress}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <TabItem
                  focused={focused}
                  name="Progreso"
                  icon={require("../../../assets/progress.png")}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
