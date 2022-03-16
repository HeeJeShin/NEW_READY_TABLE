import styled from "@emotion/native";

export const ScrollView = styled.ScrollView`
  background-color: white;
`;

export const MyPageContainer = styled.View`
  padding-top: 50px;
  /* margin-top: 50px; */
`;

export const MyPageHeader = styled.View`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
`;

export const MyInfoWrapper = styled.View`
  border-bottom-width: 3px;
  border-bottom-color: black;
  width: 45%;
  align-items: center;
`;

export const MyInfo = styled.Text`
  margin-bottom: 13px;
`;

export const MyProfileWrapper = styled.TouchableOpacity`
  border-bottom-color: #e5e5e5;
  border-bottom-width: 1.5px;
  width: 45%;
  align-items: center;
`;

export const MyProfile = styled.Text`
  margin-bottom: 13px;
  color: #666666;
`;

export const MyPageBody = styled.View`
  /* margin-top: 19px; */
  padding-top: 19px;
  margin: 0 auto;
`;

export const MyPageBodyTitle = styled.Text`
  font-size: 11px;
  color: #666666;
  margin-bottom: 20px;
`;

export const MyPageContentsWrapper = styled.TouchableOpacity`
  width: 310px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
`;

export const MyPageBodyContents = styled.Text`
  font-size: 12px;
`;

export const RightArrow = styled.Image`
  width: 6px;
  height: 9px;
`;

export const UnderBar = styled.View`
  margin: 0 auto;
  border-bottom-width: 1px;
  border-bottom-color: #e8e8e8;
  width: 90%;
`;
