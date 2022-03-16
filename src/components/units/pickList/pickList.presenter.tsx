import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, Feather } from "@expo/vector-icons";

import {
  ScrollView,
  PickListContainer,
  ListCountWrapper,
  ListCount,
  ListCountContents,
  PickListWrapper,
  ListCountLeft,
  ListCountRight,
  ListCountRightImg,
  ListCountRightContents,
  PickListCard,
  PickListImageTest,
  PickListImage,
  PickListHeader,
  PickListTitle,
  PickListContentsWrapper,
  PickListRemark,
  PickListContents,
  PickListBookmark,
  PickListTag,
  RightArrow,
  PickListMemo
} from "./pickList.styles";

const PickListUI = (props: any) => {
  // console.log(props.data2?.fetchUseditemsIPicked);
  const navigation = useNavigation();
  return (
    <ScrollView stickyHeaderIndices={[0]}>
      <PickListContainer>
        <ListCountWrapper>
          <ListCountLeft>
            <ListCount>관심 레스토랑</ListCount>
            <ListCountContents>
              {props.pickCountData?.fetchUseditemsCountIPicked}
            </ListCountContents>
            <RightArrow
              source={require("../../../../public/images/rightArrow.png")}
            />
          </ListCountLeft>
          <ListCountRight>
            <Feather name="calendar" style={{ color: "#eb4034" }} size={11} />
            <ListCountRightContents>예약하기</ListCountRightContents>
          </ListCountRight>
        </ListCountWrapper>
        {props.data2?.fetchUseditemsIPicked.map(el => (
          <PickListCard
            key={el._id}
            onPress={() => {
              navigation.navigate("detail", {
                id: props.onPressDetail(el)
              });
            }}
          >
            {el.images[0] ? (
              <PickListImage
                source={{
                  uri: `${el.images[0]}`
                }}
              />
            ) : (
              <PickListImageTest></PickListImageTest>
            )}
            <PickListContentsWrapper>
              <PickListHeader>
                <PickListTitle>{el.name}</PickListTitle>
                <PickListBookmark
                  onPress={e => {
                    e.stopPropagation();
                    props.onPressPick(el);
                  }}
                  hitSlop={{ top: 5, right: 5, bottom: 5, left: 5 }}
                  // onPress={() => props.onPressPick(el)}
                >
                  <Ionicons
                    name="bookmark"
                    style={{ color: "#eb4034" }}
                    size={13}
                  />
                </PickListBookmark>
              </PickListHeader>
              <PickListRemark>{el.remarks}</PickListRemark>
              <PickListContents>
                <PickListTag>{el.contents}</PickListTag>
              </PickListContents>
            </PickListContentsWrapper>
          </PickListCard>
        ))}
        <PickListWrapper>
          <PickListMemo placeholder=" 나만의 메모를 남겨보세요."></PickListMemo>
        </PickListWrapper>
      </PickListContainer>
    </ScrollView>
  );
};

export default PickListUI;
