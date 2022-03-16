import React from "react";
import DetailScreen from "../screens/detail";
import DetailContainer from "../../src/components/units/detail/detail.container";
import PictureContainer from "../../src/components/units/detail/picturelist/picture.container";

import { createStackNavigator } from "@react-navigation/stack";
import DetailReviewContainer from "../../src/components/units/detail/reviewlist/reviewlist.container";
import UserWriteContainer from "../../src/components/units/reservation/reviewwrite/write.container";

const Stack = createStackNavigator();

const DetailNavigator = () => {
  return (
    <Stack.Navigator screenOptions={() => ({ headerShown: false })}>
      <Stack.Screen
        name="datail"
        component={DetailScreen}
        options={() => ({ headerShown: false })}
      />
      <Stack.Screen
        name="detailMain"
        component={DetailContainer}
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
        name="reviewwrite"
        component={UserWriteContainer}
        options={() => ({ headerShown: false })}
      />
    </Stack.Navigator>
  );
};

export default DetailNavigator;
