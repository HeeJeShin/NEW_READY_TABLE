import { useMutation, useQuery } from "@apollo/client";
import { useNavigation } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import { Alert } from "react-native";
import { GlobalContext } from "../../../../../App";
import WriteUI from "./write.presenter";
import { CREATE_USEDITEM_QUESTION, FETCH_USED_ITEM } from "./write.queries";

const UserWriteContainer = () => {
  const { id } = useContext(GlobalContext);
  const [myStar, setMyStar] = useState(5);
  const [myImage, setImage] = useState("");
  const [myContents, setMycontents] = useState("");
  const navigation = useNavigation();
  const [createUseditemQuestion] = useMutation(CREATE_USEDITEM_QUESTION);
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: id }
  });
  console.log(data, "reviewwrite");
  function onChangeContents(event: any) {
    setMycontents(event);
  }
  async function onClickRegisterReview() {
    try {
      const result = await createUseditemQuestion({
        variables: {
          useditemId: id,
          createUseditemQuestionInput: {
            contents: myStar + "#$%&" + myContents + "#$%&" + myImage
            // contents: myContents
          }
        }
      });
      Alert.alert("리뷰를 등록합니다~");

      console.log(result);
      navigation.navigate("review");
    } catch (error) {
      Alert.alert(error.message);
    }
  }

  return (
    <WriteUI
      onChangeContents={onChangeContents}
      onClickRegisterReview={onClickRegisterReview}
      setImage={setImage}
      myStar={myStar}
      setMyStar={setMyStar}
      data={data}
    />
  );
};
export default UserWriteContainer;
