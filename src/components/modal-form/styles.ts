import styled from "styled-components";
import arrowImage from "../../assets/arrow.png";

export const StyledModal = styled.div`
  color: #fff;
  background-color: rgba(255, 255, 255, 0.8);

  position: relative;
  overflow: hidden;
  z-index: 1;

  &::before {
    content: "";
    background-image: url(${arrowImage});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    width: 50%;
    height: 70%;

    position: absolute;
    right: -2rem;
    bottom: -2rem;
    z-index: -1;
    opacity: 0.5;
  }
`;

export const StyledForm = styled.div``;

export const TextFieldStyles = {
  width: "100%",
  // backgroundColor: "rgba(255, 255, 255, 0.8)",
};
