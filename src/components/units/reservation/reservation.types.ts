export interface IReservationProps {
  onPressMoveToReviewWrite(el: any): any;

  removeFew(
    el: any
  ): (event: import("react-native").GestureResponderEvent) => void;
  DeleteBtn(
    el: any
  ): (event: import("react-native").GestureResponderEvent) => void;

  onPressDetail: any;
  // isSoldOut: any;

  productInfo: any;
  soldOutList: any;

  // basketItems: any;
}
