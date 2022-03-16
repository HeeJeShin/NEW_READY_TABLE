import React from "react";
import styled from "@emotion/native";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const NotificationButton = styled.TouchableOpacity`
  margin-left: 20px;
`;
const MainbannerButton = styled.TouchableOpacity``;

const SearchiconButton = styled.TouchableOpacity`
  margin-right: 20px;
`;
const MainBannerWrapper = styled.View`
  /* position: fixed;
  bottom: 0; */
  padding-top: 50px;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
  background-color: white;
`;
const LogoText = styled.Text`
  font-family: "Bungee";
  color: #dd4124;
  font-size: 30px;
  margin: 0 auto;
`;

const MainBanner = () => {
  const navigation = useNavigation();
  return (
    <MainBannerWrapper>
      <NotificationButton
        onPress={() =>
          navigation.navigate("notification" as never, {} as never)
        }
      >
        <Ionicons name="ios-notifications-outline" size={30} color="black" />
      </NotificationButton>
      <MainbannerButton
        onPress={() => navigation.navigate("home" as never, {} as never)}
      >
        <LogoText>READY TABLE</LogoText>
      </MainbannerButton>
      <SearchiconButton
        onPress={() => navigation.navigate("search" as never, {} as never)}
      >
        <Ionicons name="ios-search-outline" size={30} color="black" />
      </SearchiconButton>
    </MainBannerWrapper>
  );
};
export default MainBanner;
