import styled from "styled-components";
import { setFlexbox } from "../../helpers/Mixins";
import { colors } from "../../helpers/Colors";
import { images } from "../Images/Images";

export const Container = styled.div`
  width: 100%;
  ${setFlexbox("center", "center", "row")};
  background-color: ${colors.color4};
`;

export const ContainerSecondary = styled.div`
  ${setFlexbox("center", "center", "row")};
  width: 100%;
  /* height: 100vh; */
  padding: 10rem 0;
  max-width: 1000px;

  .contact-left-div,
  .contact-right-div {
    ${setFlexbox("center", "center", "column")};
    width: 50%;
    height: 100%;
  }

  form {
    ${setFlexbox("center", "center", "column")};
    width: 60%;

    label {
      width: 100%;
      font-size: 1.6rem;
      color: ${colors.color3};
      margin-bottom: 0.5rem;
    }

    input {
      width: 100%;
      height: 5rem;
      border-radius: 5px;
      border: none;
      background-color: ${colors.color5};
      margin-bottom: 1rem;
      text-indent: 10px;
      color: ${colors.color1};
      font-size: 1.8rem;

      &:focus {
        border: none;
        outline: none;
      }
    }

    button {
      height: 5rem;
      width: 40%;
      font-size: 1.8rem;
      color: ${colors.color4};
      background-color: ${colors.color6};
      font-weight: 700;
      border-radius: 5px;
      cursor: pointer;
      transition: 0.3s;
      border: none;
      margin-top: 1.5rem;
    }
  }
`;

export const Title = styled.h2`
  font-size: 6.4rem;
  color: ${colors.color1};
  margin-bottom: 1.5rem;
  font-weight: 400;
  width: 70%;
  text-align: left;
`;

export const Text = styled.p`
  font-size: 1.8rem;
  color: ${colors.color3};
  text-align: justify;
  width: 70%;
`;
