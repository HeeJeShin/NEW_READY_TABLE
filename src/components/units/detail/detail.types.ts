import { GestureResponderEvent } from "react-native";
import { IQuery, IUseditem } from "../../../commons/types/generated/types";

export interface IdetailProps {
  onPressEndTime: (event: GestureResponderEvent) => void;
  onPressStartTime: (event: GestureResponderEvent) => void;
  el?: IUseditem;
  onPressRes: any;
  data: Pick<IQuery, "fetchUseditem">;
}

export interface IProduct {
  id: any;
  productName: string;
  productContents: string;
  productPrice: number;
  seller: any;
  images: any;
  remarks: any;
}
