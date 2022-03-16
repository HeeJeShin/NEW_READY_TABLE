import styled from "@emotion/native";
import { useFonts } from "expo-font";

// const [loaded] = useFonts({
//   Bungee: require("../../../assets/fonts/Bungee-Regular.ttf")
// });
// if (!loaded) {
//   return null;
// }

export const Wrapper = styled.View`
  flex: 1;
  align-content: center;
  justify-content: center;
  padding: 55px;
  background-color: white;
`;
export const LogoWrapper = styled.View`
  align-items: center;
  justify-content: center;
  margin-bottom: 100px;
`;
export const LogoText = styled.Text`
  font-family: "Bungee";
  color: #dd4124;
  font-size: 30px;
  margin: 0 auto;
`;

export const UserInput = styled.TextInput`
  margin-top: 10px;
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
  width: 97%;
  margin-top: 45px;
  margin-bottom: 10px;
  margin-left: 5px;
  background-color: #f1f1f1;
  height: 40px;
  border-radius: 20px;
  justify-content: center;
`;
export const LoginButton = styled.Text`
  color: #c8c8c8;
  line-height: 45px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
`;
export const SignUpWrapper = styled.View`
  padding-top: 20px;
  margin: auto;
`;

export const SignUp = styled.Text``;
