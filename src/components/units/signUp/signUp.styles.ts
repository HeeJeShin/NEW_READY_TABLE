import styled from "@emotion/native";

export const Wrapper = styled.ScrollView`
  background-color: white;
  flex: 1;
  align-content: center;
  padding: 55px;
`;
export const LogoWrapper = styled.View`
  padding: 20px;
  align-items: center;
  justify-content: center;
  margin-bottom: 100px;
  margin-top: 50px;
`;
export const LogoText = styled.Text`
  font-family: "Bungee";
  color: #dd4124;
  font-size: 30px;
  margin: 0 auto;
`;

export const UserInput = styled.TextInput`
  height: 45px;
  padding: 10px;
  border-bottom-color: #bdbdbd;
  border-bottom-width: 1px;
  font-size: 12px;
`;

export const ButtonWrapper = styled.View`
  align-items: center;
  justify-content: center;
`;

export const LoginButtonWrapper = styled.TouchableOpacity`
  width: 100%;
  margin-top: 40px;
  margin-bottom: 45px;
  background-color: #dd4124;
  height: 45px;
  border-radius: 20px;
`;
export const LoginButton = styled.Text`
  color: white;
  line-height: 45px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
`;
export const SignUpWrapper = styled.TouchableOpacity`
  margin: auto;
`;

export const SignUp = styled.Text``;
