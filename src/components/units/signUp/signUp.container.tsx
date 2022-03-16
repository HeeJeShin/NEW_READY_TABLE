import { useMutation } from "@apollo/client";
import React from "react";
import { useForm } from "react-hook-form";
import SignUpPageUI from "./signUp.presenter";
import { CREATE_USER } from "./signUp.queries";
import { useNavigation } from "@react-navigation/native";

const SignUpPage = (props: any) => {
  const navigation = useNavigation();
  const [createUser] = useMutation(CREATE_USER);
  const { handleSubmit, control } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      repassword: ""
    }
  });

  const JoinUser = async (data: any) => {
    try {
      await createUser({
        variables: {
          createUserInput: {
            name: data.name,
            email: data.email,
            password: data.password
          }
        }
      });
      // console.log(data);
      console.log("회원가입 완료!!");
      navigation.navigate("login");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <SignUpPageUI
      navigation={props.navigation}
      handleSubmit={handleSubmit}
      control={control}
      JoinUser={JoinUser}
    />
  );
};
export default SignUpPage;
