import React from "react";
import { ScrollView } from "react-native";
import {
  AddPhoto,
  AddPhotoButton,
  Avatar,
  BigAddPhoto,
  BottomWrapper,
  ContentTitle,
  InnerTopWrapper,
  InnerWrapper,
  Nickname,
  Photos,
  ReviewContent,
  // ReviewStar,
  ReviewWrapper,
  Star,
  TopMiddleWrapper
} from "./reviewlist.styles";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { IReviewProps } from "./reviewlist.types";
import { FlatList } from "react-native-gesture-handler";

const ReviewListUIItem = (props: IReviewProps) => {
  return (
    <>
      <InnerWrapper>
        <ReviewWrapper>
          <InnerTopWrapper>
            {props.el?.user.picture ? (
              <Avatar
                source={{
                  uri: `https://storage.googleapis.com/${props.el?.user.picture}`
                }}
              />
            ) : (
              <FontAwesome name="user-circle" size={53} color="gray" />
            )}
            <TopMiddleWrapper>
              <Nickname>{props.el?.user?.name}</Nickname>

              <Star>
                <AntDesign name="star" size={24} color="#FFD600" />
                <AntDesign name="star" size={24} color="#FFD600" />
                <AntDesign name="star" size={24} color="#FFD600" />
                <AntDesign name="star" size={24} color="#FFD600" />
                {/* {new Array(Number(props.el?.contents.split("#$%&")[0]))
                  .fill(1)
                  .map((el, index) => (
                    <AntDesign
                      name="star"
                      size={24}
                      color="#FFD600"
                      key={index}
                    />
                  ))} */}
                {/* {new Array(Number(5 - props.el?.contents.split("#$%&")[0]))
                  .fill(1)
                  .map((el, index) => (
                    <AntDesign
                      name="staro"
                      size={24}
                      color="#FFD600"
                      key={index}
                    />
                  ))} */}
              </Star>
            </TopMiddleWrapper>
            <Photos>
              {props.el?.contents.split("#$%&")[2] !== "" && (
                <AddPhotoButton onPress={props.onPressEnlargePicture}>
                  {props.isLarge ? (
                    <BigAddPhoto
                      source={{
                        uri: `${props.el?.contents.split("#$%&")[2]}`
                      }}
                    />
                  ) : (
                    <AddPhoto
                      source={{
                        uri: `${props.el?.contents.split("#$%&")[2]}`
                      }}
                    />
                  )}
                </AddPhotoButton>
              )}
            </Photos>
          </InnerTopWrapper>
          <BottomWrapper>
            {!props.isLarge && (
              <>
                <ContentTitle>식당이용 후기</ContentTitle>
                <ReviewContent>
                  {props.el?.contents.split("#$%&")[1]}
                </ReviewContent>
              </>
            )}
          </BottomWrapper>
        </ReviewWrapper>
      </InnerWrapper>
    </>
  );
};

export default ReviewListUIItem;
