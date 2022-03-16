import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import MyPageScreen from "../screens/myPages/myPageMain";
import ModifyScreen from "../screens/myPages/modify";
import MyProfileScreen from "../screens/myPages/myProfile";

const Stack = createStackNavigator();
const MyPageNavigator = () => {
  return (
    <Stack.Navigator screenOptions={() => ({ headerShown: false })}>
      <Stack.Screen
        name="마이 페이지"
        component={MyPageScreen}
        options={() => ({ headerShown: false })}
      />
      <Stack.Screen
        name="내 정보 수정"
        component={ModifyScreen}
        options={() => ({ headerShown: true })}
      />
      <Stack.Screen
        name="프로필"
        component={MyProfileScreen}
        options={() => ({ headerShown: false })}
      />
    </Stack.Navigator>
  );
};

export default MyPageNavigator;
