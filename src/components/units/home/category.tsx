import React from "react";
import { Text, View, Dimensions, ImageBackground, Image } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import styled from "@emotion/native";
import { useNavigation } from "@react-navigation/native";

const CategofyMainWrapper = styled.ScrollView`
  margin-top: 0px;
  width: 100%;
  height: 102px;
`;

const CategoryIconWrapper = styled.TouchableOpacity``;
// const CategoryIcon = styled.Image`
//   width: 10px;
//   height: 10px;
// `;

const CategoryText = styled.Text`
  width: 38px;
  height: 11px;
  font-size: 8px;
  font-weight: bold;
  text-align: center;
  font-style: normal;
  font-weight: bold;
  font-size: 8px;
  line-height: 11px;
  color: #4d4d72;
`;
const IconWrapper = styled.View``;

const MyText = styled.Text`
  text-align: center;
  line-height: 56px;
  color: white;
  font-weight: bold;
  /* font-color: white; */
`;
const CategoryIcon = styled.ImageBackground`
  width: 58px;
  height: 58px;
  margin-left: 16px;
  margin-right: 10px;
`;
const MyView = styled.View`
  flex: 1;
`;
const onPressDetail = (el: any) => {};
const CategoryList = (props) => {
  const navigation = useNavigation();

  const MyCategories = [
    {
      num: 1,
      food: "한식",
      image: require("../../../../public/images/korean.png"),
    },
    {
      num: 2,
      food: "양식",
      image: require("../../../../public/images/western.png"),
    },
    {
      num: 3,
      food: "중식",
      image: require("../../../../public/images/chinese.png"),
    },
    {
      num: 4,
      food: "분식",
      image: require("../../../../public/images/schoolfood.png"),
    },
    {
      num: 5,
      food: "패스트푸드",
      image: require("../../../../public/images/fastfood2.png"),
    },
    {
      num: 6,
      food: "일식",
      image: require("../../../../public/images/japanese.png"),
    },
    {
      num: 7,
      food: "도시락",
      image: require("../../../../public/images/lunchbox.png"),
    },
  ];
  return (
    <CategofyMainWrapper horizontal showsHorizontalScrollIndicator={false}>
      {MyCategories.map((el) => (
        <CategoryIconWrapper
          key={el.num}
          onPress={() =>
            navigation.navigate(
              "categorydetail" as never,
              { id: el.food } as never
            )
          }
        >
          <CategoryIcon source={el.image} resizeMode="cover">
            <MyText>{el.food}</MyText>
          </CategoryIcon>
        </CategoryIconWrapper>
      ))}
    </CategofyMainWrapper>
  );
};

export default CategoryList;
