import React from "react";

import LoginScreen from "../screens/login";
import SignUpPage from "../../src/components/units/signUp/signUp.container";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const LoginNavigator = () => {
  return (
    <Stack.Navigator screenOptions={() => ({ headerShown: false })}>
      <Stack.Screen
        name="login"
        component={LoginScreen}
        options={() => ({ headerShown: false })}
      />
      <Stack.Screen
        name="signUp"
        component={SignUpPage}
        options={() => ({ headerShown: false })}
      />
    </Stack.Navigator>
  );
};

export default LoginNavigator;
