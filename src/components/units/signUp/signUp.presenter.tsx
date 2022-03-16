import React from "react";
import { Controller } from "react-hook-form";
import {
  Wrapper,
  LogoWrapper,
  LogoText,
  LoginButtonWrapper,
  LoginButton,
  UserInput
} from "./signUp.styles";

const SignUpPageUI = (props: any) => {
  return (
    <Wrapper>
      <LogoWrapper>
        <LogoText>READY TABLE</LogoText>
      </LogoWrapper>
      <Controller
        control={props.control}
        name="name"
        rules={{ required: true, maxLength: 10 }}
        render={({ field: { onChange, onBlur, value } }) => (
          <UserInput
            onBlur={onBlur}
            onChangeText={(text: any) => onChange(text)}
            value={value}
            placeholder="이름을 입력해 주세요."
          />
        )}
      />
      <Controller
        control={props.control}
        name="email"
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <UserInput
            onBlur={onBlur}
            onChangeText={(text: any) => onChange(text)}
            value={value}
            placeholder="이메일을 입력해 주세요."
          />
        )}
      />
      <Controller
        control={props.control}
        name="password"
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <UserInput
            onBlur={onBlur}
            onChangeText={(text: any) => onChange(text)}
            value={value}
            placeholder="비밀번호를 입력해 주세요."
            secureTextEntry={true} // 비밀번호 입력
          />
        )}
      />
      <Controller
        control={props.control}
        name="repassword"
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <UserInput
            onBlur={onBlur}
            onChangeText={(text: any) => onChange(text)}
            value={value}
            placeholder="비밀번호를 다시 한 번 입력해 주세요."
            secureTextEntry={true} // 비밀번호 입력
          />
        )}
      />
      <LoginButtonWrapper onPress={props.handleSubmit(props.JoinUser)}>
        <LoginButton>시작하기</LoginButton>
      </LoginButtonWrapper>
    </Wrapper>
  );
};

export default SignUpPageUI;
