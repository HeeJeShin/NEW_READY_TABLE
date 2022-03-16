import styled from "@emotion/native";

export const HomeView = styled.SafeAreaView`
  align-items: center;
  width: 100%;
  background-color: #ffffff;
`;

export const CarouselWrapper = styled.View`
  margin-bottom: 20px;
  width: 100%;
`;

export const DestinationContainer = styled.ScrollView`
  margin-bottom: 20px;
`;

export const TextInputWrapper = styled.TextInput``;

export const FooterWrapper = styled.View`
  background-color: white;
  margin-top: 30px;
  margin-right: 15px;
`;

export const FooterText = styled.Text``;

export const ListWrapper = styled.Pressable`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-color: black;
  overflow: hidden;
`;

export const List = styled.View`
  border-color: black;
  width: 45%;
  margin-right: 5px;
`;
export const ListContentWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-right: 5px;
`;

export const ListName = styled.Text`
  font-weight: bold;
  font-size: 19px;
  margin-left: 10px;
`;

export const ListIamge = styled.Image`
  width: 95%;
  height: 159px;
  border-top-left-radius: 10;
  border-top-right-radius: 10;
  border-bottom-left-radius: 10;
  border-bottom-right-radius: 10;
  margin-right: 5px;
  margin-left: 5px;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const ListButton = styled.TouchableOpacity``;

export const BestPickTitle = styled.Text`
  font-weight: bold;
  font-size: 30px;
  margin-right: auto;
  padding-left: 26px;
`;

export const BestItemImage = styled.ImageBackground`
  margin-right: 10px;
  width: 126px;
  height: 159px;
`;

export const BestItemName = styled.Text`
  padding-top: 10px;
  padding-left: 5px;
  font-weight: bold;
  font-size: 19px;
  margin-left: 5px;
`;

export const BestItemWrapper = styled.ScrollView`
width: 100%
height: 317px;
  border-top-left-radius: 10;
  border-top-right-radius: 10;
  border-bottom-left-radius: 10;
  border-bottom-right-radius: 10;

`;

export const BestItem = styled.TouchableOpacity`
  padding-top: 50px;
  width: 100%
  height: 317px;
`;

export const FavoriteWrapper = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeartButton = styled.TouchableOpacity``;

export const CardView = styled.View`
elevation:5,
border-radius: 4,
border-width: 0.5;
border-color: black;
margin:20,
elevation: 5
`;

export const IconWrapper = styled.View`
  margin-left: 89px;
  margin-top: -3px;
`;
/* export const Cardtitle = styled.Text``;

export const CardContent = styled.Text``; */
