import { GestureResponderEvent } from "react-native";

export interface IWritePorps {
  setImage: any;
  onClickRegisterReview: (event: GestureResponderEvent) => void;
  onChangeContents: (text: string) => void;
  myStar: number;
  setMyStar: any;
  data: any;
}
