import React from "react";
import DetailHeader from "../../../src/components/units/detail/detail.header";
import DetailContainer from "../../../src/components/units/detail/detail.container";

import DetailReviewContainer from "../../../src/components/units/detail/reviewlist/reviewlist.container";
import UserWriteContainer from "../../../src/components/units/reservation/reviewwrite/write.container";
import { IdetailProps } from "../../../src/components/units/detail/detail.types";

const DetailScreen = (props: IdetailProps) => {
  return (
    <>
      <DetailHeader data={props.data} />
      <DetailContainer />
      {/* <UserWriteContainer /> */}
      {/* <DetailReviewContainer /> */}
    </>
  );
};

export default DetailScreen;
