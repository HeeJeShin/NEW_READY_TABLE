import React from "react";
import { Text, View } from "react-native";
import { FETCH_USED_ITEMS } from "./home.queires";

import { useQuery } from "@apollo/client";
import styled from "@emotion/native";
import { useNavigation } from "@react-navigation/native";

// import MainBanner from "../../commons/mainbanner";
import { Ionicons } from "@expo/vector-icons";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../commons/types/generated/types";

const CategoryDetailView = styled.View`
  background-color: white;
`;

const CategoryWrapper = styled.View`
  background-color: white;
  margin-top: 50px;
`;

const CategoryText = styled.Text`
  font-size: 30px;
  font-weight: bold;
  margin: 10px;
`;

const ListWrapper = styled.ScrollView`
  elevation: 5;
  border-radius: 4px;
  border-width: 0.5;
  border-color: "#d6d7da";
  margin: 20px;
  elevation: 5;
  /* flex-direction: row;
  flex-wrap: wrap;
  width: 100%; */
`;

const List = styled.TouchableOpacity``;
const ListName = styled.Text`
  font-weight: bold;
  font-size: 20px;
  margin-left: 10px;
`;

export const ListIamge = styled.Image`
  width: 100%;
  height: 200px;
  border-top-left-radius: 10;
  border-top-right-radius: 10;
  border-bottom-left-radius: 10;
  border-bottom-right-radius: 10;
  margin-right: 5px;
  margin-left: 5px;
  margin-bottom: 10px;
  margin-top: 10px;
`;
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
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 30px;
  background-color: white;
`;
const LogoText = styled.Text`
  font-family: "Bungee";
  color: #dd4124;
  font-size: 30px;
  margin: 0 auto;
`;
const categoryDetail = ({ route }) => {
  const navigation = useNavigation();

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS, { variables: { search: route.params.id } });
  // console.log(route.params.id);
  // console.log(data);
  return (
    <CategoryDetailView>
      <CategoryWrapper>
        <MainBannerWrapper>
          <NotificationButton onPress={() => navigation.navigate("detail", {})}>
            <Ionicons
              name="ios-notifications-outline"
              size={30}
              color="black"
            />
          </NotificationButton>
          <MainbannerButton onPress={() => navigation.navigate("home", {})}>
            <LogoText>READY TABLE</LogoText>
          </MainbannerButton>
          <SearchiconButton onPress={() => navigation.navigate("search", {})}>
            <Ionicons name="ios-search-outline" size={30} color="black" />
          </SearchiconButton>
        </MainBannerWrapper>
        <CategoryText>{route.params.id} 카테고리 항목입니다</CategoryText>
        <ListWrapper>
          {data?.fetchUseditems.map((el, index) => (
            <List
              key={el._id}
              onPress={() =>
                navigation.navigate(
                  "detail" as never,
                  { ustiemId: el._id } as never
                )
              }
            >
              <ListIamge source={{ uri: el.images[0] }} resizeMode="cover" />
              <ListName> {String(el.name).split("-")[1]}</ListName>
              {/* {String(el.name).split("-")[1]} */}
            </List>
          ))}
        </ListWrapper>
      </CategoryWrapper>
    </CategoryDetailView>
  );
};

export default categoryDetail;
