import React from "react";

import HomeScreen from "../screens/home";
import DetailScreen from "../screens/detail";
import SearchScreen from "../screens/search";

import { createStackNavigator } from "@react-navigation/stack";

import categoryDetail from "../../src/components/units/home/categoryDetail";
import notification from "../../src/components/units/home/notification";
import PictureContainer from "../../src/components/units/detail/picturelist/picture.container";
import DetailReviewContainer from "../../src/components/units/detail/reviewlist/reviewlist.container";
import ReservationScreen from "../screens/reservation";

const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator screenOptions={() => ({ headerShown: false })}>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={() => ({ headerShown: false })}
      />

      <Stack.Screen
        name="search"
        component={SearchScreen}
        options={() => ({ headerShown: false })}
      />
      <Stack.Screen
        name="picture"
        component={PictureContainer}
        options={() => ({ headerShown: false })}
      />
      <Stack.Screen
        name="review"
        component={DetailReviewContainer}
        options={() => ({ headerShown: false })}
      />
      <Stack.Screen
        name="reservation"
        component={ReservationScreen}
        options={() => ({ headerShown: false })}
      />
      <Stack.Screen
        name="categorydetail"
        component={categoryDetail}
        options={() => ({ headerShown: false })}
      />
      <Stack.Screen
        name="notification"
        component={notification}
        options={() => ({ headerShown: false })}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
