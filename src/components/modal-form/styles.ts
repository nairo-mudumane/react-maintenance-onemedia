import styled from "styled-components";
import { TextField } from "@mui/material";
import { styled as MuiStyled } from "@mui/styles";
import { THEME } from "../../global";

import arrowImage from "../../assets/arrow.png";

export const StyledModal = styled.div`
  color: #fff;
  background-color: rgba(255, 255, 255, 0.9);

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
    height: 46%;

    position: absolute;
    right: -2rem;
    bottom: -2rem;
    z-index: -1;
    opacity: 0.5;
  }
`;

export const CssTextField = MuiStyled(TextField)({
  // input label when focused
  "& label.Mui-focused": {
    color: THEME.colors.orange1,
  },

  // focused color for input with variant='outlined'
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: THEME.colors.orange1,
    },
  },
});
