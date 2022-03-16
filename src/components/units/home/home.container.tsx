import { useMutation, useQuery } from "@apollo/client";
import React, { useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GlobalContext } from "../../../../App";
import HomeUI from "./home.presenter";
import {
  FETCH_USED_ITEMS,
  FETCH_USED_ITEMS_OF_THE_BEST,
  FETCH_USED_ITEM_I_PICKED,
  TOGGLE_USED_ITEM_PICK,
  FETCH_USED_ITEM,
} from "./home.queires";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../commons/types/generated/types";

const HomeContainer = () => {
  const { id, setId, setTagId, setIsFavorite, isfavorite }: any =
    useContext(GlobalContext);
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS, {
    variables: {
      page: 1,
    },
  });
  const { data: bestData } = useQuery(FETCH_USED_ITEMS_OF_THE_BEST);

  const { data: Ipickdata } = useQuery(FETCH_USED_ITEM_I_PICKED, {
    variables: { search: "" },
  });
  const { data: detailData } = useQuery(FETCH_USED_ITEM, {
    variables: {
      useditemId: id,
    },
  });

  const [toggleUseditemPick] = useMutation(TOGGLE_USED_ITEM_PICK);
  const onPressDetail = (el: any) => {
    setId(el._id);
  };
  useEffect(() => {
    for (let i = 0; i < Ipickdata?.fetchUseditemsIPicked.length; i++) {
      if (Ipickdata?.fetchUseditemsIPicked[i]._id === id) {
        setIsFavorite(true);
        break;
      } else {
        setIsFavorite(false);
      }
    }
  }, [Ipickdata]);

  async function onPressPicked() {
    await toggleUseditemPick({
      variables: { useditemId: id },
    });
    setIsFavorite((prev) => !prev);
  }

  return (
    <HomeUI
      data={data}
      onPressDetail={onPressDetail}
      onPressPicked={onPressPicked}
      bestData={bestData}
      detailData={detailData}
      isfavorite={isfavorite}
    />
  );
};

export default HomeContainer;
