import React from "react";

import TabNavigator from "./tabNavigator";
import DetailNavigator from "./detail";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={() => ({ headerShown: false })}>
      <Stack.Screen
        name="tab"
        component={TabNavigator}
        options={() => ({ headerShown: false })}
      />
      <Stack.Screen
        name="detail"
        component={DetailNavigator}
        options={() => ({ headerShown: false })}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
