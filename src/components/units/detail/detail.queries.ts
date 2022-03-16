import { gql } from "@apollo/client";

export const FETCH_USEDITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      pickedCount
      createdAt
      useditemAddress {
        _id
        zipcode
        address
        addressDetail
      }
      buyer {
        _id
        email
        name
        picture
      }
    }
  }
`;
