import React from "react";
import { Text } from "react-native";
import { IUseditem } from "../../../../commons/types/generated/types";
import ReviewItem from "./reviewlist.presenterItems";
import {
  BarWrapper,
  Btn,
  BtnText,
  LastLine,
  ReviewAVGWrapper,
  RightWrapper,
  ScoreText,
  ScoreWrapper,
  SpaceView,
  StarAvg,
  StarText,
  StarWrapper,
  Stickbar1,
  Stickbar2,
  Stickbar3,
  Stickbar4,
  Stickbar5,
  TextView,
  Wrapper,
} from "./reviewlist.styles";
import { IReviewProps } from "./reviewlist.types";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import DetailHeader from "../detail.header";
import { ScrollView } from "react-native-gesture-handler";
const ReviewListUI = (props: IReviewProps) => {
  const navigation = useNavigation();
  return (
    // <ScrollView>
    <Wrapper>
      <ReviewAVGWrapper>
        <StarWrapper>
          <TextView>
            <StarText>리뷰 별점 평군</StarText>
          </TextView>
          <AntDesign name="star" size={22} color="#FFD600" />
          <StarAvg>3.6</StarAvg>
        </StarWrapper>
        <RightWrapper>
          <ScoreWrapper>
            <ScoreText>5점</ScoreText>
            <ScoreText>4점</ScoreText>
            <ScoreText>3점</ScoreText>
            <ScoreText>2점</ScoreText>
            <ScoreText>1점</ScoreText>
          </ScoreWrapper>

          <BarWrapper>
            <Stickbar5></Stickbar5>
            <Stickbar4></Stickbar4>
            <Stickbar3></Stickbar3>
            <Stickbar2></Stickbar2>
            <Stickbar1></Stickbar1>
          </BarWrapper>
          <SpaceView></SpaceView>
        </RightWrapper>
      </ReviewAVGWrapper>
      <LastLine></LastLine>
      {props.ReviewData?.fetchUseditemQuestions.map((el: IUseditem) => (
        <ReviewItem
          key={el._id}
          data={props.data}
          userData={props.userData}
          el={el}
          isLarge={props.isLarge}
          onPressEnlargePicture={props.onPressEnlargePicture}
          ReviewData={undefined}
        />
      ))}
    </Wrapper>
    // {/* </ScrollView> */}
  );
};
export default ReviewListUI;
