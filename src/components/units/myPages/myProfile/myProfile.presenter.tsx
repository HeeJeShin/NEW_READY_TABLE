import React from "react";
import { useNavigation } from "@react-navigation/native";
import { IQuery } from "../../../../commons/types/generated/types";
import { Ionicons } from "@expo/vector-icons";
import {
  ScrollView,
  MyProfileContainer,
  MyProfileHeader,
  MyInfoWrapper,
  MyProfileWrapper,
  MyInfo,
  MyProfile,
  ImageWrapper,
  ProfileImage,
  IconWrapper,
  ProfileName,
  ProfileBody,
  MyPoint,
  MyPointList,
  MyPointAmount,
  MyPointContents,
  MyPointWrapper,
  MyPaymentWrapper,
  MyPayment,
  PaymentText,
} from "./myProfile.sytles";
import {
  GestureResponderEvent,
  NativeSyntheticEvent,
  NativeTouchEvent,
  Text,
} from "react-native";
interface IProfileProps {
  onPressPay: any;
  // onPressPay: any;
  data?: Pick<IQuery, "fetchUserLoggedIn">;
  // pointData?: Pick<IQuery, "fetchPointTransactionsCountOfLoading">;
  pointData?: any;
  onPress: any;
}

const MyProfileUI = (props: IProfileProps) => {
  console.log(props.pointData?.fetchPointTransactionsOfLoading);
  const navigation = useNavigation();
  return (
    <ScrollView>
      <MyProfileContainer>
        <MyProfileHeader>
          <MyInfoWrapper
            onPress={() => navigation.navigate("마이 페이지" as never)}
          >
            <MyInfo>정보관리</MyInfo>
          </MyInfoWrapper>
          <MyProfileWrapper>
            <MyProfile>프로필</MyProfile>
          </MyProfileWrapper>
        </MyProfileHeader>
        <ImageWrapper>
          {props.data?.fetchUserLoggedIn.picture ? (
            <IconWrapper>
              <ProfileImage
                source={{ uri: `${props.data?.fetchUserLoggedIn.picture}` }}
              ></ProfileImage>
              <ProfileName>{props.data?.fetchUserLoggedIn.name}</ProfileName>
            </IconWrapper>
          ) : (
            <IconWrapper>
              <Ionicons name="person-circle" size={86} color={"gray"} />
              <ProfileName>{props.data?.fetchUserLoggedIn.name}</ProfileName>
            </IconWrapper>
          )}
        </ImageWrapper>
        <ProfileBody>
          <MyPoint>마이 포인트</MyPoint>
          <MyPointAmount>
            {props.data?.fetchUserLoggedIn.userPoint.amount.toLocaleString(
              "ko-KR"
            )}
          </MyPointAmount>
          {props.pointData?.fetchPointTransactionsCountOfLoading?.map(
            (el: any) => (
              <MyPointWrapper key={el._id}>
                <MyPointList>충전일</MyPointList>
                <MyPointContents>{el.createdAt.slice(0, 10)}</MyPointContents>
                <MyPointList>충전 내역</MyPointList>
                <MyPointContents>
                  {el.amount.toLocaleString("ko-KR")}
                </MyPointContents>
                <MyPointList>구매한 아이템</MyPointList>
                <MyPointContents>{el.useditem.name}</MyPointContents>
                <MyPointList>아이템 가격</MyPointList>
                <MyPointContents>{el.useditem.price}</MyPointContents>
              </MyPointWrapper>
            )
          )}
        </ProfileBody>
        <MyPaymentWrapper>
          <MyPayment onPress={props.onPressPay}>
            <PaymentText>충전하기</PaymentText>
          </MyPayment>
        </MyPaymentWrapper>
      </MyProfileContainer>
    </ScrollView>
  );
};

export default MyProfileUI;
