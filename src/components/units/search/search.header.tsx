import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  HeaderNavigator,
  HeaderWrapper,
  NaviButton,
  NaviText
} from "../detail/detail.styles";

const SearchHeader = () => {
  const navigation = useNavigation();

  return (
    <HeaderWrapper>
      <HeaderNavigator>
        <NaviButton onPress={() => navigation.navigate("search")}>
          <NaviText>검색</NaviText>
        </NaviButton>
        <NaviButton onPress={() => navigation.navigate("map")}>
          <NaviText>지도</NaviText>
        </NaviButton>
      </HeaderNavigator>
    </HeaderWrapper>
  );
};
export default SearchHeader;
