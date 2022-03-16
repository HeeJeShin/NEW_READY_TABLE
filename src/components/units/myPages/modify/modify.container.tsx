import React, { useState, useContext } from "react";
import ModifyUI from "./modify.presenter";
// import { useNavigation } from "@react-navigation/native";
import { GlobalContext } from "../../../../../App";
import { useMutation, useQuery, useApolloClient } from "@apollo/client";
import { FETCH_USER_LOGGED_IN, UPDATE_USER } from "./modify.queries";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

const ModifyContainer = () => {
  // const navigation = useNavigation();
  const [name, setName] = useState("");
  const [myImage, setMyImage] = useState("");
  const [password, setPassword] = useState("");
  const [updateUser] = useMutation(UPDATE_USER);
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const client = useApolloClient();
  const { setAccessToken, setUserInfo, userInfo } = useContext(GlobalContext);
  console.log(userInfo);

  function onChangeName(event: any) {
    setName(event.target.value);
  }

  function onChangePassword(event: any) {
    setPassword(event.target.value);
  }

  function onChangeCheckPassword(event: any) {
    setPassword(event.target.value);
  }

  const onPressLogout = async () => {
    try {
      await client.clearStore();
      if (setAccessToken) setAccessToken("");
      if (setUserInfo) setUserInfo(undefined);
      AsyncStorage.removeItem("accessToken");
      AsyncStorage.removeItem("userInfo");
      Alert.alert("로그아웃");
    } catch (error) {
      console.log(error.message);
    }
  };

  async function modifyName() {
    try {
      await updateUser({
        variables: {
          updateUserInput: {
            name: name
          }
        }
      });
      alert("닉네임이 수정되었습니다.");
    } catch (error) {
      console.log(error.message);
    }
  }

  async function ModifyImage() {
    try {
      await updateUser({
        variables: {
          updateUserInput: {
            picture: myImage
          }
        }
      });
      alert("사진이 수정되었습니다.");
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <ModifyUI
      modifyName={modifyName}
      ModifyImage={ModifyImage}
      data={data}
      onPressLogout={onPressLogout}
      setName={setName}
      setMyImage={setMyImage}
      onChangeName={onChangeName}
      onChangePassword={onChangePassword}
      onChangeCheckPassword={onChangeCheckPassword}
    />
  );
};

export default ModifyContainer;
