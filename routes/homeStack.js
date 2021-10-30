import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import ReviewDetails from "../screens/ReviewDetails";
import Home from "../screens/Home";
import Header from "../shared/header";
import React, { useState } from "react";
const Screens = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Header navigation={navigation} title="Squid GameZone" />
        ),
      };
    },
  },
  ReviewDetails: {
    screen: ReviewDetails,
    navigationOptions: {
      title: "Game Details",
    },
  },
};

const HomeStack = createStackNavigator(Screens, {
  defaultNavigationOptions: {
    headerTintColor: "#FFF",
    headerStyle: {
      backgroundColor: "#249f9c",
    },
  },
});

export default HomeStack;
