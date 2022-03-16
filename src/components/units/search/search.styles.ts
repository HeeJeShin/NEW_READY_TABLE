import styled from "@emotion/native";

export const SearchPageView = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
`;

export const SearchBar = styled.TextInput`
  width: 315px;
  height: 39.74px;
`;

export const SearchBarLine = styled.View`
  width: 339px;
  border-bottom-width: 2px;
  border-bottom-color: #f1eef6;
`;

export const SearchIcon = styled.Image`
  height: 24px;
  width: 24px;
`;
export const Search = styled.View`
  display: flex;
  flex-direction: row;
  width: 339px;
  height: 39.74px;
  align-items: center;
`;

export const ProductList = styled.View`
  width: 339px;
  margin-top: 12px;
  display: flex;
  flex-direction: column;
`;

export const Product = styled.View`
  width: 339px;
  height: 119px;
  display: flex;
  flex-direction: row;
  border: 1px solid #dd4124;
  border-radius: 15px;
  align-items: center;
  padding-left: 12px;
  margin-bottom: 12px;
`;

export const ProductImage = styled.Image`
  width: 95px;
  height: 99px;
  border-radius: 15px;
`;

export const ProductNameAndPrice = styled.View`
  width: 170px;
  height: 97px;
  margin-left: 10px;
`;

export const ProductName = styled.Text`
  font-family: "NotoSans";
  color: black;
`;

export const ProductPrice = styled.Text`
  font-family: "NotoSans";
  color: black;
`;

export const ProductWrapper = styled.TouchableOpacity``;

export const Btn = styled.TouchableOpacity`
  border: 1px solid black;
  margin-right: 10px;
`;

export const FilterWrapper = styled.TouchableOpacity`
  width: 80px;
  border: 1px solid black;
  border: none;
  border-radius: 10px;
  background-color: #dd4124;
  align-items: center;
  justify-content: center;
  height: 20px;
  margin-right: 10px;
`;

export const FilterFont = styled.Text`
  font-size: 11px;
  color: white;
  font-family: "NotoSans";
`;

export const Row = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 15px;
`;

export const Row1 = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 15px;
`;

export const Row3 = styled.View`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const FilterView = styled.View`
  /* width: 90%; */
  margin-top: 15px;
`;

export const FilterView1 = styled.View`
  width: 90%;
`;

export const FilterToggle = styled.TouchableOpacity`
  width: 80px;
  border: 1px solid black;
  border: none;
  border-radius: 10px;
  background-color: #dd4124;
  align-items: center;
  justify-content: center;
  height: 20px;
`;
