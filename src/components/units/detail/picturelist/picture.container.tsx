import { useQuery } from "@apollo/client";
import React, { useContext } from "react";
import { GlobalContext } from "../../../../../App";
import { FETCH_USED_ITEM } from "../../home/home.queires";
import DetailHeader from "../detail.header";
import { IdetailProps } from "../detail.types";
import { Picture, PictureWrapper, Wrapper } from "./picture.styles";

const PictureContainer = (props: IdetailProps) => {
  const { id } = useContext(GlobalContext);
  const { data } = useQuery(FETCH_USED_ITEM);
  console.log(id, "사진데이터");
  return (
    <Wrapper>
      <DetailHeader />
      <PictureWrapper>
        {data?.fetchUseditem.images
          ?.filter((el, index) => el)
          .map(el => (
            <Picture
              key={el._id}
              source={{
                uri: `${el.images}`
              }}
            />
          ))}

        <Picture source={require("../../../../../public/images/food.jpg")} />
        <Picture source={require("../../../../../public/images/food1.jpg")} />
        <Picture source={require("../../../../../public/images/food2.jpeg")} />
        <Picture source={require("../../../../../public/images/food3.jpg")} />
        <Picture source={require("../../../../../public/images/food4.jpg")} />
        <Picture source={require("../../../../../public/images/togo.jpg")} />

        <Picture
          source={require("../../../../../public/images/restaurant.jpeg")}
        />
        <Picture source={require("../../../../../public/images/menu.jpg")} />
        <Picture
          source={require("../../../../../public/images/restaurant1.jpg")}
        />
        <Picture
          source={require("../../../../../public/images/restaurant2.jpg")}
        />
        <Picture
          source={require("../../../../../public/images/restaurant3.jpg")}
        />
        <Picture source={require("../../../../../public/images/brunch.jpg")} />
        <Picture source={require("../../../../../public/images/food7.jpg")} />
        <Picture source={require("../../../../../public/images/food2.jpeg")} />
        <Picture source={require("../../../../../public/images/food4.jpg")} />
        <Picture source={require("../../../../../public/images/food6.jpg")} />
        <Picture source={require("../../../../../public/images/food4.jpg")} />
        <Picture source={require("../../../../../public/images/food4.jpg")} />
      </PictureWrapper>
    </Wrapper>
  );
};
export default PictureContainer;
