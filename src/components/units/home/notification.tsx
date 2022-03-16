import Constants from "expo-constants";
// import * as Notifications from "expo-notifications";
import React, { useState, useEffect, useRef } from "react";
import { Text, View, Button, Platform } from "react-native";
import styled from "@emotion/native";
import { Ionicons } from "@expo/vector-icons";

export const ScrollView = styled.ScrollView`
  background-color: white;
  margin-top: 10px;
`;

export const ModifyContainer = styled.View`
  padding-left: 26px;
`;

export const ModifyHeader = styled.View`
  margin-bottom: 21px;
  border-bottom-color: #695858;
  border-bottom-width: 1px;
  width: 90%;
`;

export const ModifyTitle = styled.Text`
  font-size: 15px;
  color: black;
  font-family: NotoSans;
`;
export const ImageWrapper = styled.View``;
export const IconWrapper = styled.View`
  margin: 0 auto;
`;

export const ModifyContents = styled.Text`
  font-size: 20px;
  padding-bottom: 26px;
`;

export const ModifyBody = styled.View`
  border-bottom-color: #e8e8e8;
  border-bottom-width: 1px;
  margin-bottom: 21px;
  width: 90%;
`;

export const ModifyFooter = styled.View``;

export const UserInfoRightWrapper = styled.TouchableOpacity`
  padding: 10px 0px;
`;
const MainBannerWrapper = styled.View`
  /* position: fixed;
  bottom: 0; */
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 30px;
  background-color: white;
  margin-top: 40px;
`;
const NotificationButton = styled.TouchableOpacity`
  margin-left: 20px;
`;
const MainbannerButton = styled.TouchableOpacity``;

const SearchiconButton = styled.TouchableOpacity`
  margin-right: 20px;
`;
const LogoText = styled.Text`
  font-family: "Bungee";
  color: #dd4124;
  font-size: 30px;
  margin: 0 auto;
`;
const NotiView = styled.View`
  background-color: white;
`;

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const notification = () => {
  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token)
    );

    // This listener is fired whenever a notification is received while the app is foregrounded
    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });

    // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  return (
    <NotiView>
      <MainBannerWrapper>
        <NotificationButton onPress={() => navigation.navigate("detail", {})}>
          <Ionicons name="ios-notifications-outline" size={30} color="black" />
        </NotificationButton>
        <MainbannerButton onPress={() => navigation.navigate("home", {})}>
          <LogoText>READY TABLE</LogoText>
        </MainbannerButton>
        <SearchiconButton onPress={() => navigation.navigate("search", {})}>
          <Ionicons name="ios-search-outline" size={30} color="black" />
        </SearchiconButton>
      </MainBannerWrapper>
      <ScrollView>
        <ModifyContainer>
          <ModifyHeader>
            <ModifyTitle>알람 설정 페이지</ModifyTitle>
          </ModifyHeader>
          <ModifyBody>
            <ModifyContents>11시에 알림 및 정보를 받아보세요! </ModifyContents>
            <ModifyTitle>
              {notification && notification.request.content.title}
            </ModifyTitle>
            <ModifyContents>
              {notification &&
                JSON.stringify(notification.request.content.body)}
            </ModifyContents>
            <ModifyTitle>HAPPY NEW YEAR</ModifyTitle>
            <ModifyContents>새해 기념 특별한 식당 추천</ModifyContents>
            <ModifyTitle>1월엔 어디가 핫할까?</ModifyTitle>
            <ModifyContents>이번달 인기 레스토랑</ModifyContents>
            <ModifyTitle>혼자서도 잘 먹어요</ModifyTitle>
            <ModifyContents>혼밥장소 BEST</ModifyContents>
            <ModifyTitle>느긋한 오후에</ModifyTitle>
            <ModifyContents>브런치 맛집 TOP15</ModifyContents>
            <ModifyTitle>분위기 잡고 싶을 때</ModifyTitle>
            <ModifyContents>와인 명소 추천</ModifyContents>
            <ModifyTitle>코로나에도 안전한</ModifyTitle>
            <ModifyContents>추천 배달 맛집</ModifyContents>
            <ModifyTitle>기념일은 레디테이블과</ModifyTitle>
            <ModifyContents>분위기 내고 싶을 때</ModifyContents>
            <ModifyTitle>이벤트 참여하고 쿠폰 받자!</ModifyTitle>
            <ModifyContents>리뷰 이벤트 참여하기</ModifyContents>
          </ModifyBody>
          <Button
            title="알림 적용하기"
            onPress={async () => {
              await sendPushNotification(expoPushToken);
              // console.log(expoPushToken);
              console.log(sendPushNotification[variable]);
            }}
          />
        </ModifyContainer>
      </ScrollView>
    </NotiView>
  );
};

// Can use this function below, OR use Expo's Push Notification Tool-> https://expo.dev/notifications
async function sendPushNotification(expoPushToken) {
  const message = {
    to: expoPushToken,
    sound: "default",
    title: "레디테이블과 함께하는 점심식사!",
    body: "오늘의 맛집을 확인해보세요!",
    // data: { someData: "goes here" }
  };

  await fetch("https://exp.host/--/api/v2/push/send", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Accept-encoding": "gzip, deflate",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(message),
  });
}

async function registerForPushNotificationsAsync() {
  let token;
  if (Constants.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert("Must use physical device for Push Notifications");
  }

  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  return token;
}
export default notification;
