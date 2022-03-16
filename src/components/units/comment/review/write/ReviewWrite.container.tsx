// import { useMutation, useQuery } from "@apollo/client";
// import { launchImageLibrary } from "react-native-image-picker";
// import React, { ChangeEvent, useContext, useState } from "react";
// import { ReactNativeFile } from "apollo-upload-client";
// import {
//   IMutation,
//   IMutationCreateBoardCommentArgs,
//   IMutationUpdateBoardCommentArgs
// } from "../../../../commons/types/generated/types";
// import { FETCH_BOARD_COMMENTS } from "../list/ReviewList.queries";
// import ReviewWriteUI from "./ReviewWrite.presenter";
// import {
//   CREATE_BOARD_COMMENT,
//   UPDATE_BOARD_COMMENT,
//   UPLOAD_FILE
// } from "./ReviewWrite.queries";

// const ReviewWrite = () => {
//   const [uploadFile] = useMutation(UPLOAD_FILE);
//   const [imageUri, setImageUri] = useState({ uri: "" });
//   const [image, setImage] = useState({ uri: "" });
//   const onPressOpenAlbum = () => {
//     launchImageLibrary(
//       {
//         mediaType: "photo",
//         includeBase64: true
//       },
//       async ({ assets }) => {
//         const file = new ReactNativeFile({
//           uri: assets?.[0].uri,
//           type: assets?.[0].type,
//           name: assets?.[0].fileName
//         });
//         const source = { uri: "data:image/jpeg;base64," + assets?.[0].base64 };
//         setImageUri(source);
//         try {
//           const result = await uploadFile({
//             variables: {
//               file: file
//             }
//           });
//           console.log(result.data?.uploadFile.url);
//           setImage(result.data?.uploadFile.url);
//         } catch (error) {
//           console.log(error.message);
//         }
//       }
//     );
//   };
//   return (
//     <ReviewWriteUI imageUri={imageUri} onPressOpenAlbum={onPressOpenAlbum} />
//   );
// };
// export default ReviewWrite;
