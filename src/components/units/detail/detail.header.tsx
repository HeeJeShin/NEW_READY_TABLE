import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  HeaderNavigator,
  HeaderWrapper,
  Mainimg,
  NaviButton,
  NaviText
} from "./detail.styles";

import { IdetailProps } from "./detail.types";
import { GlobalContext } from "../../../../App";
import { useQuery } from "@apollo/client";
import { FETCH_USEDITEM } from "./detail.queries";
import { FETCH_USED_ITEM } from "../home/home.queires";

const DetailHeader = (props: IdetailProps) => {
  const navigation = useNavigation();
  const { id } = useContext(GlobalContext);
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: id }
  });
  console.log(data, "detailHeader");
  return (
    <HeaderWrapper>
      {/* {data?.fetchUseditem.images.map ? (
        (el, index) => (
          <Mainimg
            key={el._id}
            source={{
              uri: `${el.images[0]}`
            }}
          />
        )
      ) : ( */}
      {/* //데이터가 무거워 안불러와지는 이슈가있음.. */}
      <Mainimg source={require("../../../../public/images/defaultfood.jpg")} />
      {/* )} */}

      <HeaderNavigator>
        <NaviButton onPress={() => navigation.navigate("detail")}>
          <NaviText>홈</NaviText>
        </NaviButton>
        <NaviButton onPress={() => navigation.navigate("picture")}>
          <NaviText>사진</NaviText>
        </NaviButton>
        <NaviButton onPress={() => navigation.navigate("review")}>
          <NaviText>리뷰</NaviText>
        </NaviButton>
      </HeaderNavigator>
    </HeaderWrapper>
  );
};
export default DetailHeader;
