import React from "react";
import { Fontisto } from "@expo/vector-icons";
import {
  BtnText,
  ButtonWrapper,
  ContentsText,
  DataAt,
  DataName,
  DataWrapper,
  ImgWrapper,
  ListTitleWrapper,
  NonReserText,
  NonReserWrapper,
  ReserImg,
  ReserWrapper,
  TitleText,
  Wrapper
} from "./reservation.styles";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { IReservationProps } from "./reservation.types";
import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native";
import { PickListImage, PickListImageTest } from "../pickList/pickList.styles";
import { getDate } from "../../../commons/library/utils/getDate";

const ReservationUI = (props: IReservationProps) => {
  const navigation = useNavigation();
  const soldOutList = props.soldOutList?.map((el: any) => el._id);
  console.log(props.productInfo);
  return (
    <ScrollView style={{ backgroundColor: "white" }} stickyHeaderIndices={[0]}>
      <Wrapper>
        <ListTitleWrapper>
          <TitleText>오늘예약한 식당리스트입니다</TitleText>
          <ContentsText>12:30 내에 미방문시 자동취소됩니다.</ContentsText>
        </ListTitleWrapper>
        {(!props.productInfo || props.productInfo?.length === 0) && (
          <NonReserWrapper>
            <NonReserText>예약된 내역이 없습니다.</NonReserText>
          </NonReserWrapper>
        )}
        {props.productInfo
          ?.map(el => (
            // <ReserWrapper isSoldOut={soldOutList?.includes(el.id)} key={el._id}>

            <ReserWrapper key={el.id}>
              <ImgWrapper
                onPress={() => {
                  if (!soldOutList?.includes(el.id)) {
                    navigation.navigate("detail", {
                      id: props.onPressDetail(el)
                    });
                  }
                }}
              >
                {el.images ? (
                  <ReserImg
                    source={{

                      uri: `${el.images[0]}`

                    }}
                  />
                ) : (
                  <ReserImg
                    source={require("../../../../public/images/food.jpg")}
                  />
                )}
              </ImgWrapper>
              <DataWrapper>
                <DataName>{String(el.productName).split("-")[1]}</DataName>
                <DataAt>{el.createdAt}당일 12:00</DataAt>
              </DataWrapper>

              <ButtonWrapper
                key={el._id}
                onPress={() =>
                  navigation.navigate("reviewwrite", {
                    id: props.onPressMoveToReviewWrite(el)
                  })
                }
              >
                <BtnText>리뷰쓰기 </BtnText>
              </ButtonWrapper>
              {/* <ButtonWrapper onPress={props.removeFew}>
                <BtnText>삭제하기 </BtnText>
              </ButtonWrapper> */}
            </ReserWrapper>
          ))
          .reverse()}
      </Wrapper>
    </ScrollView>
  );
};

export default ReservationUI;
