import * as React from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import styled from "@emotion/native";

const MapHeader = styled.View`
  padding-top: 155px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
`;

const HeaderTitle1Wrapper = styled.TouchableOpacity`
  border-bottom-color: #e5e5e5;
  border-bottom-width: 1.5px;
  width: 50%;
  align-items: center;
`;

const HeaderTitle1 = styled.Text`
  margin-bottom: 13px;
  color: #666666;
`;

const HeaderTitle2Wrapper = styled.View`
  border-bottom-width: 3px;
  border-bottom-color: black;
  width: 50%;
  align-items: center;
`;

const HeaderTitle2 = styled.Text`
  margin-bottom: 13px;
`;

const API_KEY = "e14c719335d31b0a"; //구글지도맵.. ID값

const MapContainer = () => {
  const navigation = useNavigation();
  const [location, setLocation] = useState({
    latitude: 37.483706,
    longitude: 126.895664,
  });

  // const locations = [["낭만부대찌개", 37.483706, 126.895664], []];

  return (
    <View style={styles.container}>
      <MapHeader>
        <HeaderTitle1Wrapper onPress={() => navigation.navigate("search")}>
          <HeaderTitle1>검색</HeaderTitle1>
        </HeaderTitle1Wrapper>
        <HeaderTitle2Wrapper>
          <HeaderTitle2>지도</HeaderTitle2>
        </HeaderTitle2Wrapper>
      </MapHeader>
      {/* <script
        async
        src="https://maps.googleapis.com/maps/api/js?key=e14c719335d31b0a&callback=initMap"
      ></script> */}
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.009,
          longitudeDelta: 0.009,
        }}
        key={API_KEY}
      >
        <Marker
          coordinate={{
            latitude: 37.484503,
            longitude: 126.8966,
          }}
          title="은희네 해장국"
          description="제주식해장국: 10000원..."
        />
        <Marker
          coordinate={{
            latitude: 37.483812,
            longitude: 126.895612,
          }}
          title="낭만부대찌개"
          description="부대찌개:7000 밥무한리필..."
        />
        <Marker
          coordinate={{
            latitude: 37.484059,
            longitude: 126.895708,
          }}
          title="갓파스시 구로점"
          description="초밥무한리필: 19,900원..."
        />
        <Marker
          coordinate={{
            latitude: 37.485128,
            longitude: 126.894901,
          }}
          title="도쿄스테이크 태평양물산점"
          description="스테이크: 9,900원..."
        />
        <Marker
          coordinate={{
            latitude: 37.484259,
            longitude: 126.893424,
          }}
          title="롤링파스타 구로디지털단지"
          description="토마토파스타: 9,900원..."
        />

        <Marker
          coordinate={{
            latitude: 37.481502,
            longitude: 126.895005,
          }}
          title="Happy Brunch"
          description="Best Brunch: 19,900원..."
        />
        <Marker
          coordinate={{
            latitude: 37.482799,
            longitude: 126.896728,
          }}
          title="0153B SUSHI"
          description="모듬: 9,900원..."
        />

        <Marker
          coordinate={{
            latitude: 37.488425,
            longitude: 126.893702,
          }}
          title="입춘"
          description="떡볶이:3000원, 모듬튀김: 3000원"
        />

        <Marker
          coordinate={{
            latitude: 37.486813,
            longitude: 126.894784,
          }}
          title="입춘"
          description="떡볶이:3000원, 모듬튀김: 3000원"
        />

        <Marker
          coordinate={{
            latitude: 37.486182,
            longitude: 126.892554,
          }}
          title="김성식 돈까스"
          description="등심돈까스:11000원, 안심돈까스: 13000원"
        />

        <Marker
          coordinate={{
            latitude: 37.485165,
            longitude: 126.898141,
          }}
          title="꾸덕다욧"
          description="단백질샐러드:9000원, 시저샐러드: 7000원"
        />
        <Marker
          coordinate={{
            latitude: 37.484844,
            longitude: 126.896374,
          }}
          title="한촌설렁탕"
          description="얼큰설렁탕:11000원, 설렁탕: 9000원"
        />

        <Marker
          coordinate={{
            latitude: 37.484674,
            longitude: 126.896479,
          }}
          title="생어거스틴"
          description="타이거새우팟타이:19000원, 뿌빳뽕커리: 17000원"
        />

        <Marker
          coordinate={{
            latitude: 37.484506,
            longitude: 126.889047,
          }}
          title="담소소사골순대국"
          description="순대국:7000원, 육계장: 7000원"
        />

        <Marker
          coordinate={{
            latitude: 37.485784,
            longitude: 126.897137,
          }}
          title="샐러디"
          description="칠리베이컨볼:9000원, 훈제연어랩: 7000원"
        />
        <Marker
          coordinate={{
            latitude: 37.483621,
            longitude: 126.895796,
          }}
          title="김우영회전초밥스시"
          description="한접시: 1700원, 즈라시스시: 12000원"
        />

        <Marker
          coordinate={{
            latitude: 37.482957,
            longitude: 126.897534,
          }}
          title="샤오롱바오우육탕면"
          description="우육면:9000원, 마장면: 11000원"
        />

        <Marker
          coordinate={{
            latitude: 37.485904,
            longitude: 126.892987,
          }}
          title="가장맛있는족발"
          description="족발덮밥:9000원, 보쌈정식: 11000원"
        />

        <Marker
          coordinate={{
            latitude: 37.483886,
            longitude: 126.888384,
          }}
          title="공단갈비꼬치"
          description="갈비꼬치 200g: 19000원, 갈비정식: 11000원"
        />

        <Marker
          coordinate={{
            latitude: 37.48455,
            longitude: 126.890401,
          }}
          title="칠번가피자"
          description="페페로니피자:29000원, 콤비네이션: 30000원"
        />

        <Marker
          coordinate={{
            latitude: 37.482725,
            longitude: 126.8946,
          }}
          title="라마노피자"
          description="마르게리따:11000원, 알리오올리오: 9000원"
        />
        <Marker
          coordinate={{
            latitude: 37.484198,
            longitude: 126.89946,
          }}
          title="Bee Pretty"
          description="런치박스:11000원, 알리오올리오: 9000원"
        />

        <Marker
          coordinate={{
            latitude: 37.483798,
            longitude: 126.89917,
          }}
          title="우전"
          description="한우등심:32000원, 불고기: 19000원"
        />
        <Marker
          coordinate={{
            latitude: 37.482725,
            longitude: 126.8946,
          }}
          title="라마노피자"
          description="마르게리따:11000원, 알리오올리오: 9000원"
        />

        <Marker
          coordinate={{
            latitude: 37.484122,
            longitude: 126.900265,
          }}
          title="마구로옥"
          description="평양냉면:12000원, 왕만두: 9000원"
        />

        <Marker
          coordinate={{
            latitude: 37.484471,
            longitude: 126.900007,
          }}
          title="초미남"
          description="야끼니꾸:11000원, 타코와사비: 9000원"
        />

        <Marker
          coordinate={{
            latitude: 37.484496,
            longitude: 126.899063,
          }}
          title="미소 쌈밥"
          description="쌈밥정식:11000원, 불고기쌈밥 2인: 32000원"
        />

        <Marker
          coordinate={{
            latitude: 37.485084,
            longitude: 126.899009,
          }}
          title="동경카츠"
          description="안심카츠:11000원, 등심카츠: 10000원"
        />

        <Marker
          coordinate={{
            latitude: 37.48494,
            longitude: 126.898915,
          }}
          title="경양카츠 구로점"
          description="커리정식:11000원, 치즈카츠: 12000원"
        />
        <Marker
          coordinate={{
            latitude: 37.484496,
            longitude: 126.899063,
          }}
          title="미소 쌈밥"
          description="쌈밥정식:11000원, 불고기쌈밥 2인: 32000원"
        />

        <Marker
          coordinate={{
            latitude: 37.485192,
            longitude: 126.897966,
          }}
          title="어장촌물회"
          description="물회정식:11000원, 회덮밥: 9000원"
        />

        <Marker
          coordinate={{
            latitude: 37.485375,
            longitude: 126.897903,
          }}
          title="육대장"
          description="육계장:9000원, 하얀육계장: 8500원"
        />
      </MapView>
      <Text>ddd</Text>
    </View>
  );
};
export default MapContainer;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    // height: "100%"
  },
});
