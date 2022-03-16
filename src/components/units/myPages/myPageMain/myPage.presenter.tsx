import React from "react";
import { useNavigation } from "@react-navigation/native";

import {
  ScrollView,
  MyPageContainer,
  MyPageHeader,
  MyInfoWrapper,
  MyInfo,
  MyProfileWrapper,
  MyProfile,
  MyPageBody,
  MyPageBodyTitle,
  MyPageContentsWrapper,
  MyPageBodyContents,
  RightArrow,
  UnderBar
} from "./myPage.styles";

import { AntDesign } from "@expo/vector-icons";

const MyPageUI = (props: any) => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <MyPageContainer>
        <MyPageHeader>
          <MyInfoWrapper>
            <MyInfo>정보관리</MyInfo>
          </MyInfoWrapper>
          <MyProfileWrapper onPress={() => navigation.navigate("프로필")}>
            <MyProfile>프로필</MyProfile>
          </MyProfileWrapper>
        </MyPageHeader>
        <MyPageBody>
          <MyPageBodyTitle>설정</MyPageBodyTitle>
          <MyPageContentsWrapper
            onPress={() => navigation.navigate("내 정보 수정")}
          >
            <MyPageBodyContents>내 정보 수정</MyPageBodyContents>
            <AntDesign name="right" style={{ color: "black" }} size={8} />
          </MyPageContentsWrapper>
          <MyPageContentsWrapper>
            <MyPageBodyContents>내 취향 선택</MyPageBodyContents>
            <RightArrow
              source={require("../../../../../public/images/rightArrow.png")}
            />
          </MyPageContentsWrapper>
        </MyPageBody>
        <UnderBar></UnderBar>
        <MyPageBody>
          <MyPageBodyTitle>고객센터</MyPageBodyTitle>
          <MyPageContentsWrapper>
            <MyPageBodyContents>1:1문의</MyPageBodyContents>
            <AntDesign name="right" style={{ color: "black" }} size={8} />
          </MyPageContentsWrapper>
          <MyPageContentsWrapper>
            <MyPageBodyContents>개선제안하기</MyPageBodyContents>
            <AntDesign name="right" style={{ color: "black" }} size={8} />
          </MyPageContentsWrapper>
          <MyPageContentsWrapper>
            <MyPageBodyContents>공지사항 및 이용약관</MyPageBodyContents>
            <RightArrow
              source={require("../../../../../public/images/rightArrow.png")}
            />
          </MyPageContentsWrapper>
        </MyPageBody>
      </MyPageContainer>
    </ScrollView>
  );
};

export default MyPageUI;
