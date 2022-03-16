import {
  HomeView,
  CarouselWrapper,
  DestinationContainer,
  BestPickTitle,
  BestItemWrapper
} from "./home.styles";
import Carousel from "react-native-snap-carousel";
import React, { useState, useCallback, useRef, useEffect } from "react";
import {
  Text,
  View,
  Dimensions,
  SafeAreaView,
  ImageBackground
} from "react-native";
import styled from "@emotion/native";

interface ItemProps {
  title: string;
  text: string;
}
interface CustomCarouselProps {}
interface RenderItemProps {
  item: ItemProps;
  index: number;
}
import { useNavigation } from "@react-navigation/native";
import {
  IQuery,
  IQueryFetchUseditemsArgs
} from "../../../commons/types/generated/types";

const CarouselView = styled.ImageBackground`
  background-color: floralwhite;
  height: 250px;
  padding: 50px;
  border-radius: 10px;
`;
const NewsText = styled.Text`
  font-size: 30px;
  color: white;
  font-weight: bold;
  width: 250px;
  margin-left: -30px;
  margin-bottom: -20px;
`;
const MiniText = styled.Text`
  font-size: 15px;
`;
// backgroundColor: "floralwhite",
// borderRadius: 5,
// height: 250,
// padding: 50
const HomeUI: React.FC<CustomCarouselProps> = props => {
  const MyNews = [
    {
      message1: "HAPPY NEW YEAR",
      message2: "새해 기념 특별한 식당 추천",
      image: require("../../../../public/images/newyear.jpg")
    },
    {
      message1: "1월엔 어디가 핫할까?",
      message2: "이번달 인기 레스토랑",
      image: require("../../../../public/images/favoriteplace.jpg")
    },
    {
      message1: "혼자서도 잘 먹어요",
      message2: "혼밥장소 BEST",
      image: require("../../../../public/images/alone.jpg")
    },
    {
      message1: "느긋한 오후에",
      message2: "브런치 맛집 TOP15",
      image: require("../../../../public/images/brunch.jpg")
    },
    {
      message1: "분위기 잡고 싶을 때",
      message2: "와인 명소 추천",
      image: require("../../../../public/images/wine.jpg")
    },
    {
      message1: "코로나에도 안전한",
      message2: "추천 배달 맛집",
      image: require("../../../../public/images/delivery.jpg")
    },
    {
      message1: "기념일은 레디테이블과",
      message2: "분위기 내고 싶을 때",
      image: require("../../../../public/images/anniversary.jpg")
    }
  ];

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const ref = useRef(null);
  const navigation = useNavigation();
  const renderItem = useCallback(({ item, index }: RenderItemProps) => {
    return (
      <CarouselView source={item.image} resizeMode="cover">
        <NewsText style={{ fontSize: 30 }}>
          {`\n`}
          {`\n`}
          <MiniText>{item.message1}</MiniText>
          {`\n`}
          {item.message2}
        </NewsText>
      </CarouselView>
    );
  }, []);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white", paddingTop: 50 }}>
      <CarouselWrapper
        style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}
      >
        <Carousel
          layout={"default"}
          ref={ref}
          data={MyNews}
          // data={data?.fetchUseditems}
          sliderWidth={300}
          itemWidth={300}
          renderItem={renderItem}
          onSnapToItem={(index: number) => setActiveIndex(index)}
        />
      </CarouselWrapper>
    </SafeAreaView>
  );
};

export default HomeUI;
