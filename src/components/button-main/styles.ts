import styled from "styled-components";

export const StyledButton = styled.button`
  color: #fff;

  background: rgb(225, 128, 39);
  background: linear-gradient(
    90deg,
    rgba(225, 128, 39, 1) 60%,
    rgba(245, 186, 75, 1)
  );

  &:hover {
    background: transparent !important;
  }
`;
