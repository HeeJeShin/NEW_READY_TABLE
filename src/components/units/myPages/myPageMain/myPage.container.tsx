import { useQuery } from "@apollo/client";
import React from "react";

import MyPageUI from "./myPage.presenter";

import { FETCH_USER_LOGGED_IN } from "./myPage.queries";

const MyPage = () => {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  return <MyPageUI data={data} />;
};
export default MyPage;
