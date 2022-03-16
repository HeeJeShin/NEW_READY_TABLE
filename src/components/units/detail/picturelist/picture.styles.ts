import styled from "@emotion/native";

export const Wrapper = styled.ScrollView``;

export const PictureWrapper = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 3px;
`;

export const Picture = styled.Image`
  width: 99px;
  height: 99px;
  border-radius: 1px;
  margin: 3px;
`;
