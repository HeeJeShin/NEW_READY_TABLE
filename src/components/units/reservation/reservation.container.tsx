import { useQuery } from "@apollo/client";
import { useNavigation } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { GlobalContext } from "../../../../App";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
  IUseditem
} from "../../../commons/types/generated/types";

import { FETCH_USED_ITEMS } from "./reservation.queries";
import ReservationUI from "./reservation.presenter";
import { FETCH_USED_ITEM } from "./reviewwrite/write.queries";
import { IProduct } from "../detail/detail.types";

const ReservationContainer = () => {
  const [productInfo, setProductInfo] = useState([]);
  const { id, setId, setIsReview } = useContext(GlobalContext);
  const navigation = useNavigation;

  const { data } = useQuery(FETCH_USED_ITEM);

  console.log(data, "reservation");
  useEffect(() => {
    AsyncStorage.getItem("@carts", async (_: any, result: any) => {
      const Reseritem = await JSON.parse(result);
      setProductInfo(Reseritem);
    });
  }, []);

  useEffect(() => {
    AsyncStorage.getItem("@carts", async (_: any, result: any) => {
      const ReseritemPr = await JSON.parse(result);
      setProductInfo(ReseritemPr);
    });
    // return function cleanup() {};
  }, []);
  // }, [AsyncStorage.getItem("@carts")]);

  const onPressDetail = (el: IProduct) => {
    setId(el.id);
    console.log(setId);
    setIsReview((prev: any) => !prev);
  };

  const onPressMoveToReviewWrite = (el: IProduct) => {
    setId(el.id);

    console.log(el.id, "댓글");
  };
  // const DeleteBtn = (el: IUseditem) => () => {
  //   const deleteReser = productInfo.filter(el => el._id !== setId);
  //   AsyncStorage.setItem("@carts", JSON.stringify(deleteReser));
  //   console.log("삭제되었습니다.");
  // };
  // const onPressMoveToReviewWrite = async () => {
  //   const keys = ["@carts"];
  //   try {
  //     await AsyncStorage.multiRemove(keys);
  //   } catch (e) {
  //     // remove error
  //   }
  //   console.log("Done");
  // };

  return (
    <ReservationUI
      productInfo={productInfo}
      onPressDetail={onPressDetail}
      soldOutList={data?.fetchUseditems}
      onPressMoveToReviewWrite={onPressMoveToReviewWrite}
      // DeleteBtn={DeleteBtn}
      // removeFew={removeFew}
      id={id}
    />
  );
};

export default ReservationContainer;
