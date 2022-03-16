import React from "react";
import {
  SearchBar,
  SearchBarLine,
  SearchIcon,
  SearchPageView,
  ProductList,
  Search,
  Product,
  ProductImage,
  ProductName,
  ProductNameAndPrice,
  ProductPrice,
  ProductWrapper,
  FilterWrapper,
  Row,
  FilterFont,
  FilterToggle,
  FilterView,
  Row1,
  FilterView1,
  Row3
} from "./search.styles";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SearchUI = (props: any) => {
  const navigation = useNavigation();
  return (
    <ScrollView
      onMomentumScrollBegin={props.onLoadMore}
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: "white" }}
    >
      <SearchPageView>
        <Search>
          <SearchIcon
            source={require("../../../../public/images/search02.png")}
          />
          <SearchBar onChangeText={props.onChangeSearch} />
        </Search>
        <SearchBarLine />

        <FilterView1>
          <Row3>
            <FilterView>
              <FilterToggle onPress={props.priceToggleChange}>
                <FilterFont>가격</FilterFont>
              </FilterToggle>
            </FilterView>

            <FilterView>
              <FilterToggle onPress={props.dateToggleChange}>
                <FilterFont>날짜</FilterFont>
              </FilterToggle>
            </FilterView>
          </Row3>
        </FilterView1>

        {props.dateToggle && (
          <FilterView1>
            <Row>
              <FilterWrapper onPress={props.searchAllTime}>
                <FilterFont>모든 시간</FilterFont>
              </FilterWrapper>

              <FilterWrapper onPress={props.searchLastDay}>
                <FilterFont>지난 1일</FilterFont>
              </FilterWrapper>

              <FilterWrapper onPress={props.searchLastWeek}>
                <FilterFont>지난 1주</FilterFont>
              </FilterWrapper>
            </Row>
          </FilterView1>
        )}

        {props.priceToggle && (
          <FilterView1>
            <Row>
              <FilterWrapper onPress={props.searchFiveThousand}>
                <FilterFont>~5000</FilterFont>
              </FilterWrapper>

              <FilterWrapper onPress={props.searchOneHundredThousand}>
                <FilterFont>~10000</FilterFont>
              </FilterWrapper>

              <FilterWrapper onPress={props.searchOneHundredFiveThousand}>
                <FilterFont>~15000</FilterFont>
              </FilterWrapper>
            </Row>
          </FilterView1>
        )}

        <ProductList>
          {props.dataRes?.map((el: any) => (
            <ProductWrapper
              key={el._id}
              onPress={() => {
                navigation.navigate("detail", {
                  id: props.onPressDetail(el)
                });
              }}
            >
              <Product>
                <ProductImage
                  source={{
                    uri: el.images[0]
                  }}
                />

                <ProductNameAndPrice>
                  <ProductName>{String(el.name).split("-")[1]}</ProductName>
                  <ProductPrice>{`${el.price
                    .toLocaleString("ko-KR")
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`}</ProductPrice>
                </ProductNameAndPrice>
              </Product>
            </ProductWrapper>
          ))}

          {!props.dataRes &&
            props.data?.fetchUseditems.map((el: any) => (
              <ProductWrapper
                key={el._id}
                onPress={() => {
                  navigation.navigate("detail", {
                    id: props.onPressDetail(el)
                  });
                }}
              >
                <Product>
                  <ProductImage
                    source={{
                      uri: el.images[0]
                    }}
                  />
                  <ProductNameAndPrice>
                    <ProductName>{String(el.name).split("-")[1]}</ProductName>
                    <ProductPrice>{`${el.price
                      .toLocaleString("ko-KR")
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`}</ProductPrice>
                  </ProductNameAndPrice>
                </Product>
              </ProductWrapper>
            ))}
        </ProductList>
      </SearchPageView>
    </ScrollView>
  );
};

export default SearchUI;
