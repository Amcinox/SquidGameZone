import { createStackNavigator } from "react-navigation-stack";
import About from "../screens/About";
import Header from "../shared/header";
import React, { useState } from "react";

const Screens = {
  About: {
    screen: About,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title="About" />,
      };
    },
  },
};
const AboutStack = createStackNavigator(Screens, {
  defaultNavigationOptions: {
    headerTintColor: "#f44786",
    headerStyle: {
      backgroundColor: "#249f9c",
    },
  },
});

export default AboutStack;
