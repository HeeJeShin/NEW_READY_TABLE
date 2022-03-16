import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeNavigator from "./home";
import SearchNavigator from "./search";
import PickListNavigator from "./pickList";
import ReservationNavigator from "./reservation";
import MyPageNavigator from "./myPages";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false
      }}
    >
      <Tab.Screen
        name="홈"
        component={HomeNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="home-sharp"
              style={{ color: focused ? "#eb4034" : "#404040" }}
              size={30}
            />
          )
        }}
      />
      <Tab.Screen
        name="검색"
        component={SearchNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="search"
              style={{ color: focused ? "#eb4034" : "#404040" }}
              size={30}
            />
          )
        }}
      />
      <Tab.Screen
        name="마이 리스트"
        component={PickListNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="bookmark"
              style={{ color: focused ? "#eb4034" : "#404040" }}
              size={30}
            />
          )
        }}
      />
      <Tab.Screen
        name="예약 리스트"
        component={ReservationNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="calendar-sharp"
              style={{ color: focused ? "#eb4034" : "#404040" }}
              size={30}
            />
          )
        }}
      />
      <Tab.Screen
        name="마이페이지"
        component={MyPageNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="person-sharp"
              style={{ color: focused ? "#eb4034" : "#404040" }}
              size={30}
            />
          )
        }}
      />
    </Tab.Navigator>
  );
};

// const TabStackScreen = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ color, focused }) => {
//           let iconName = "";

//           if (route.name === "home") {
//             iconName = "home-sharp";
//           } else if (route.name === "search") {
//             iconName = "search";
//           } else if (route.name === "pickList") {
//             iconName = "bookmark";
//           } else if (route.name === "reservation") {
//             iconName = "calendar-sharp";
//           } else if (route.name === "myPage") {
//             iconName = "person-sharp";
//           }

//           return <Ionicons name={iconName} size={25} color={color} />;
//         },

//         tabBarActiveTintColor: "#eb4034",
//         tabBarInactiveTintColor: "#BDBDBD",
//         headerShown: false,
//         tabBarLabelStyle: { fontWeight: "bold" }
//       })}
//     >
//       <Tab.Screen name="홈" component={HomeNavigator} />
//       <Tab.Screen name="검색" component={SearchNavigator} />
//       <Tab.Screen name="찜 목록" component={PickListNavigator} />
//       <Tab.Screen name="예약" component={ReservationNavigator} />
//       <Tab.Screen name="마이 페이지" component={MyPageNavigator} />
//     </Tab.Navigator>
//   );
// };

export default TabNavigator;
