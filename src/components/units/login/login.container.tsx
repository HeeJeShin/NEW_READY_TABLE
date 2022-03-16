import { useForm } from "react-hook-form";
import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../../../../App";
import { useMutation, useApolloClient } from "@apollo/client";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MainLoginUi from "./login.presenter";
import { LOGIN_USER, FETCH_USER_LOGGED_IN } from "./login.queries";

const MainLogin = props => {
  const { setUserInfo, userInfo, setAccessToken } = useContext(GlobalContext);
  const client = useApolloClient();
  const [loginUser] = useMutation(LOGIN_USER);

  const onAppLogin = async data => {
    try {
      const result = await loginUser({
        variables: {
          email: data.email,
          password: data.password
        }
      });

      // const resultUser = await client.query({
      //   query: FETCH_USER_LOGGED_IN,
      //   context: {
      //     headers: {
      //       authorization: `Bearer${result.data?.loginUser.accessToken}`
      //     }
      //   }
      // });

      console.log(result.data?.loginUser.accessToken);
      await AsyncStorage.setItem(
        "accessToken",
        result.data.loginUser.accessToken || ""
      );
      AsyncStorage.setItem(
        "userInfo",
        JSON.stringify(result.data.fetchUserLoggedIn) || ""
      );
      setAccessToken(result.data?.loginUser.accessToken);
      setUserInfo(result.data.fetchUserLoggedIn);
      Alert.alert("로그인 성공!");
    } catch (error) {
      console.log(error.message);
    }
  };

  const { handleSubmit, control } = useForm({
    defaultValues: {
      email: "",
      password: ""
    }
  });

  if (!userInfo) {
    return (
      <MainLoginUi
        onAppLogin={onAppLogin}
        control={control}
        handleSubmit={handleSubmit}
      />
    );
  }
};
export default MainLogin;
