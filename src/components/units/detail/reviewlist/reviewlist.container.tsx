import { useQuery } from "@apollo/client";
import React, { useContext, useState } from "react";
import { GlobalContext } from "../../../../../App";
import { IdetailProps } from "../detail.types";
import ReviewListUI from "./reviewlist.presenter";

import {
  FETCH_USED_ITEM_QUESTIONS,
  FETCH_USER_LOGGDIN
} from "./reviewlist.queries";
import { IReviewProps } from "./reviewlist.types";

const DetailReviewContainer = (props: any) => {
  const [isLarge, setIsLarge] = useState(false);
  const { id, setId } = useContext(GlobalContext);
  const { data: ReviewData } = useQuery(FETCH_USED_ITEM_QUESTIONS, {
    variables: { page: 1, useditemId: id }
  });
  const { data: userData } = useQuery(FETCH_USER_LOGGDIN);
  function onPressEnlargePicture() {
    setIsLarge(prev => !prev);
    console.log(isLarge);
  }

  return (
    <ReviewListUI
      data={props.data}
      userData={userData}
      isLarge={isLarge}
      ReviewData={ReviewData}
      onPressEnlargePicture={onPressEnlargePicture}
    />
  );
};
export default DetailReviewContainer;
