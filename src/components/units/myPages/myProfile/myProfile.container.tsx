import { useQuery } from "@apollo/client";
import React from "react";
import { gql } from "@apollo/client";
import { FETCH_USER_LOGGED_IN } from "../myPageMain/myPage.queries";
import MyProfileUI from "./myProfile.presenter";
import { IMPConst } from "iamport-react-native";
import { useNavigation } from "@react-navigation/native";
const FETCH_POINT_TRANSACTIONS_OF_LOADING = gql`
  query fetchPointTransactionsOfLoading($page: Int) {
    fetchPointTransactionsOfLoading(page: $page) {
      _id
      impUid
      balance
      createdAt
      amount
    }
  }
`;

const MyProfile = ({ route, navigation }) => {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const { data: pointData } = useQuery(FETCH_POINT_TRANSACTIONS_OF_LOADING, {
    variables: { page: 1 }
  });
  const merchantUid = `mid_${new Date().getTime()}`;

  const onPressPay = () => {
    const MyPoint = {
      params: {
        pg: "html5_inicis",
        pay_method: "card",
        merchant_uid: merchantUid,
        name: "Ready_table",
        amount: 50000,
        app_scheme: "exampleforrn",
        buyer_name: "김한솔",
        buyer_tel: "010-1234-5678",
        buyer_email: "123@123.com",
        m_redirect_url: IMPConst.M_REDIRECT_URL
      }
    };
    navigation.navigate("Payment", data);
  };
  return (
    <MyProfileUI data={data} pointData={pointData} onPressPay={onPressPay} />
  );
};

export default MyProfile;
