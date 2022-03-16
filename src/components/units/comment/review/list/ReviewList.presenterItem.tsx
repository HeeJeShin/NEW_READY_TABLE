import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import {
  Username,
  Wrapper,
  TopWrapper,
  UserWrapper,
  FoodImg,
  FootWrapper,
  Title,
  ManuType,
  Visitdata,
  Rating,
} from "./ReviewList.styles";

import { FontAwesome } from "@expo/vector-icons";
import { IReviewListProps } from "./ReviewList.types";

import DetailHeader from "../../../detail/detail.header";

const ReviewListUIItem = (props: IReviewListProps) => {
  return (
    <ScrollView>
      <Wrapper>
        <DetailHeader />
        <TopWrapper>
          <UserWrapper>
            <FontAwesome name="user-circle-o" size={24} color="black" />
            {/* <Username> User </Username> */}
            <Username> {props.el?.user.name} </Username>
          </UserWrapper>
          {/* <Visitdata>{getDate(props.el?.createdAt)}</Visitdata> */}

          <Visitdata>{props.el?.createdAt}</Visitdata>
        </TopWrapper>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        >
          <FoodImg
            source={require("../../../../../../public/images/nangmanboodae.jpg")}
          ></FoodImg>
          <FoodImg
            source={require("../../../../../../public/images/nangmanboodae.jpg")}
          ></FoodImg>
          <FoodImg
            source={require("../../../../../../public/images/nangmanboodae.jpg")}
          ></FoodImg>
        </ScrollView>
        <FootWrapper>
          <Title>글제목: 너무맛있어요!</Title>
          <Rating>aaaa</Rating>
          <ManuType>도움이 됐어요! </ManuType>
        </FootWrapper>
      </Wrapper>
    </ScrollView>
  );
};
export default ReviewListUIItem;
