// import * as React from "react";
// import * as WebBrowser from "expo-web-browser";
// import { ResponseType } from "expo-auth-session";
// import * as Google from "expo-auth-session/providers/google";
// import { initializeApp } from "firebase/app";
// import { TouchableOpacity, View } from "react-native";
// import jwtDecode from "jwt-decode";
// import {
//   getAuth,
//   GoogleAuthProvider,
//   signInWithCredential
// } from "firebase/auth";
// import { Button } from "react-native";
// import { OAuth2Client } from "google-auth-library";
// import styled from "@emotion/native";
// import { useNavigation } from "@react-navigation/native";
// import firebase from "../../../../firebaseConfig";

// // Initialize Firebase
// initializeApp({
//   apiKey: "AIzaSyAnIgMlaUPXLZqFY0xZKFzNnVIPGzuSL7Y",
//   authDomain: "ready-table-firebase-01.firebaseapp.com",
//   projectId: "ready-table-firebase-01",
//   storageBucket: "ready-table-firebase-01.appspot.com",
//   messagingSenderId: "540291082091",
//   appId: "1:540291082091:web:47a82688972f8667f8ce2e"
// });
// WebBrowser.maybeCompleteAuthSession();

// const CategoryIconWrapper = styled.TouchableOpacity`
//   align-items: center;
//   justify-content: center;
//   margin-top: 45px;
// `;
// const CategoryIcon = styled.Image`
//   width: 26px;
//   height: 26px;
// `;

// const Login = props => {
//   const navigation = useNavigation();
//   const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
//     clientId:
//       "540291082091-rqcsamfrc4h3c2g2rr2uvrjmun8k2kjb.apps.googleusercontent.com"
//   });
//   // const { id_token } = qs.parse(window.location.hash.substr(1));
//   // const { email, name, picture } = jwtDecode(id_token);
//   React.useEffect(() => {
//     if (response?.type === "success") {
//       const { id_token, accessToken } = response.params;
//       const auth = getAuth();
//       const credential = GoogleAuthProvider.credential(id_token, accessToken);
//       signInWithCredential(auth, credential);
//       // return firebase.auth().signInWithCredential(credential);
//       console.log(id_token, email, name, picture);
//     }
//   }, [response]);

//   return (
//     <>
//       <CategoryIconWrapper onPress={() => promptAsync()} disabled={!request}>
//         <View>
//           <CategoryIcon
//             source={require("../../../../public/images/google.png")}
//             style={{ height: 50, width: 50 }}
//           />
//         </View>
//       </CategoryIconWrapper>
//     </>
//   );
// };
// export default Login;
