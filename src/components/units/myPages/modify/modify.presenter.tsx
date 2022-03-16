import React from "react";

import {
  ScrollView,
  ModifyContainer,
  ModifyTitle,
  ModifyContents,
  ModifyHeader,
  ModifyImage,
  ModifyImageTest,
  ModifyBody,
  ModifyFooter,
  UserInfoRightWrapper,
  LogoutButton,
  LogoutWrapper,
  ImageWrapper,
  IconWrapper
} from "./modify.styles";

import { Ionicons } from "@expo/vector-icons";

// interface IProps {
//   modifyName: any;
// }
// 추후에 파이어베이스 이용 유저 정보 데이터 업데이트 필요.

const ModifyUI = (props: any) => {
  // console.log(props.data);
  return (
    <ScrollView>
      <ModifyContainer>
        <ModifyHeader>
          <ImageWrapper>
            {props.data?.fetchUserLoggedIn.picture ? (
              <ModifyImage
                source={{ uri: `${props.data?.fetchUserLoggedIn.picture}` }}
              ></ModifyImage>
            ) : (
              <IconWrapper>
                <Ionicons name="person-circle" size={86} color={"gray"} />
              </IconWrapper>
            )}
          </ImageWrapper>
          <ModifyTitle>닉네임</ModifyTitle>
          <ModifyContents>{props.data?.fetchUserLoggedIn.name}</ModifyContents>
        </ModifyHeader>
        <ModifyBody>
          <ModifyTitle>닉네임 변경</ModifyTitle>
          <ModifyContents>김땡떙</ModifyContents>

          <ModifyTitle>휴대폰 번호</ModifyTitle>
          <ModifyContents>010-9999-9999</ModifyContents>

          <ModifyTitle>이메일</ModifyTitle>
          <ModifyContents>{props.data?.fetchUserLoggedIn.eamil}</ModifyContents>

          <ModifyTitle>비밀번호</ModifyTitle>
          <ModifyContents>********</ModifyContents>
        </ModifyBody>
        <ModifyFooter>
          <ModifyTitle>생일</ModifyTitle>
          <ModifyContents>선택안함</ModifyContents>
          <ModifyTitle>성별</ModifyTitle>
          <ModifyContents>선택안함</ModifyContents>
        </ModifyFooter>
      </ModifyContainer>
      <LogoutWrapper>
        <UserInfoRightWrapper onPress={props.onPressLogout}>
          <LogoutButton>{"로그아웃"}</LogoutButton>
        </UserInfoRightWrapper>
      </LogoutWrapper>
    </ScrollView>
  );
};

export default ModifyUI;
