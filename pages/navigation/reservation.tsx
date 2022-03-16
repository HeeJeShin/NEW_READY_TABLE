import React from "react";
import ReservationScreen from "../screens/reservation";
import { createStackNavigator } from "@react-navigation/stack";

import DetailScreen from "../screens/detail";
import UserWriteContainer from "../../src/components/units/reservation/reviewwrite/write.container";
import DetailReviewContainer from "../../src/components/units/detail/reviewlist/reviewlist.container";

const Stack = createStackNavigator();
const ReservationNavigator = () => {
  return (
    <Stack.Navigator screenOptions={() => ({ headerShown: false })}>
      <Stack.Screen
        name="reservation"
        component={ReservationScreen}
        options={() => ({ headerShown: false })}
      />
      <Stack.Screen
        name="reviewwrite"
        component={UserWriteContainer}
        options={() => ({ headerShown: false })}
      />
      <Stack.Screen
        name="detail"
        component={DetailScreen}
        options={() => ({ headerShown: false })}
      />
      <Stack.Screen
        name="review"
        component={DetailReviewContainer}
        options={() => ({ headerShown: false })}
      />
    </Stack.Navigator>
  );
};

export default ReservationNavigator;
