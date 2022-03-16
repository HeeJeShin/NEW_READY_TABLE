import styled from "@emotion/native";
import { IReservationProps } from "./reservation.types";

export const Wrapper = styled.View`
  width: 100%;
  height: 100%;
  padding: 10px;
  background-color: white;
  padding-top: 50px;
`;

export const ListTitleWrapper = styled.View`
  border-color: #eb4034;
  border-radius: 10px;
  margin: 10px;
`;

export const TitleText = styled.Text`
  font-weight: 100;
`;

export const ContentsText = styled.Text`
  font-weight: 100;
  color: red;
  margin-top: 2px;
`;

export const ReserWrapper = styled.View`
  height: 140px;
  opacity: ${(props: IReservationProps) => (props.isSoldOut ? "0.4" : "1")};
  /* border: 1px solid #e2e2ff;
  box-shadow: 0px 4px 8px black; */
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 12px;
  padding-left: 25px;
`;

export const NonReserWrapper = styled.View``;

export const NonReserText = styled.Text``;

export const ImgWrapper = styled.TouchableOpacity`
  /* margin-left: 10px;
  margin-bottom: 10px; */
`;

export const ReserImg = styled.Image`
  width: 70px;
  height: 94px;
  border-radius: 10px;
`;

export const DataWrapper = styled.View`
  margin-left: 10px;
  width: 100px;
`;

export const DataName = styled.Text`
  font-weight: 500;
  font-size: 15px;
`;

export const DataAt = styled.Text`
  color: #eb4034;
`;

export const ButtonWrapper = styled.TouchableOpacity`
  border-radius: 10px;
  background-color: #eb4034;
  width: 70px;
  height: 30px;
  margin-left: 70px;
  /* margin-top: 25px; */
`;
export const BtnText = styled.Text`
  color: white;
  text-align: center;
  margin-top: 2px;
`;
