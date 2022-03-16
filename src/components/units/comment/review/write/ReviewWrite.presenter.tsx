import React from "react";
import {
  Plus,
  Preview,
  PreviewUpload,
  ReviewPhotoUpload,
  Wrapper
} from "./ReviewWrite.styles";
import { IReviewWriteProps } from "./ReviewWrite.types";

const ReviewWriteUI = (props: IReviewWriteProps) => {
  return (
    <Wrapper onPress={props.onPressOpenAlbum}>
      {props.imageUri.uri === "" ? (
        <ReviewPhotoUpload>
          <Plus>+</Plus>
        </ReviewPhotoUpload>
      ) : (
        <PreviewUpload>
          <Preview imageStyle={{ borderRadius: 10 }} source={props.imageUri} />
        </PreviewUpload>
      )}
    </Wrapper>
  );
};
export default ReviewWriteUI;
