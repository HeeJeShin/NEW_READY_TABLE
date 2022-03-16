import React from "react";
import { ScrollView } from "react-native";
import ReservationContainer from "../reservation/reservation.container";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import {
  ContentsText,
  DataWrapper,
  IconText,
  IconTextWrapper,
  IconWrapper,
  LineBar,
  MenuText,
  NotiText1,
  NotiText2,
  NotiText3,
  NotiWrapper,
  Photo,
  RemarksText,
  TimeBox,
  TimeText,
  TimeTitleText,
  TimeWrapper,
  TitleText,
  Wrapper
} from "./detail.styles";
import { IdetailProps } from "./detail.types";
import { Btn, BtnText } from "./reviewlist/reviewlist.styles";
import { useNavigation } from "@react-navigation/native";

const DetailUI = (props: IdetailProps) => {
  const navigation = useNavigation();
  return (
    <Wrapper stickyHeaderIndices={[0]}>
      <NotiWrapper>
        <NotiText1>[특별방역대책 후속조치에 따른 안내사항]</NotiText1>
        <NotiText2>-접종자 기준 4인이상은 식당을 이용할 수 없습니다</NotiText2>
        <NotiText3>
          -방역패스는 필수이며, 미접종자는 1명까지 입장가능합니다.
        </NotiText3>
      </NotiWrapper>
      <LineBar></LineBar>
      <DataWrapper>
        {/* <TitleText>{props.data?.fetchUseditem.name}</TitleText> */}
        <TitleText>
          {String(props.data?.fetchUseditem.name).split("-")[1]}
        </TitleText>
        {/* <TitleText>{props.data?.fetchUseditem.name}</TitleText> */}
        {/* <TitleText>{props.items?.fetchUseditems[0].name}</TitleText> */}
        <RemarksText>{props.data?.fetchUseditem.remarks}</RemarksText>
        {/* <RemarksText>{props.items?.fetchUseditems[0].remarks}</RemarksText> */}
        {/* <MenuText>정보</MenuText> */}
        <ContentsText>{props.data?.fetchUseditem.contents}</ContentsText>

        {props.data?.fetchUseditem.images
          ?.filter(el => el)
          .map(el => (
            <Photo key={el._id} source={{ uri: `${el.images}` }} />
          ))}
      </DataWrapper>
      <LineBar></LineBar>
      {/* <TimeTitleText>예약가능 시간</TimeTitleText> */}
      <TimeWrapper>
        <TimeBox onPress={props.onPressRes}>
          <TimeText>오늘 점심예약하기</TimeText>
        </TimeBox>
        {/* <TimeBox onPress={props.onPressStartTime}>
          <TimeText>오후 12:00</TimeText>
        </TimeBox>
        <TimeBox onPress={props.onPressEndTime}>
          <TimeText>오후 01:00</TimeText>
        </TimeBox> */}
      </TimeWrapper>
      <LineBar></LineBar>
      <IconWrapper>
        <IconTextWrapper>
          <MaterialIcons name="restaurant" size={23} color="black" />
          <IconText>점심예약</IconText>
        </IconTextWrapper>
        <IconTextWrapper>
          <AntDesign name="team" size={30} color="black" />
          <IconText>2인이상</IconText>
        </IconTextWrapper>
        <IconTextWrapper>
          <MaterialIcons name="local-parking" size={30} color="black" />
          <IconText>주차가능</IconText>
        </IconTextWrapper>
        <IconTextWrapper>
          <MaterialIcons name="family-restroom" size={30} color="black" />
          <IconText>가족룸</IconText>
        </IconTextWrapper>
      </IconWrapper>
    </Wrapper>
  );
};

export default DetailUI;
