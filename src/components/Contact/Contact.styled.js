import styled from "styled-components";
import { setFlexbox } from "../../helpers/Mixins";
import { colors } from "../../helpers/Colors";

export const Container = styled.div`
  width: 100%;
  ${setFlexbox("center", "center", "row")};
  background-color: ${colors.color4};
`;

export const ContainerSecondary = styled.div`
  ${setFlexbox("center", "center", "row")};
  width: 100%;
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

  @media (min-width: 300px) and (max-width: 600px) {
    flex-direction: column;
    width: 90%;

    form {
      width: 70%;

      button {
        width: 60%;
        margin-top: 2rem;
      }
    }

    .contact-left-div,
    .contact-right-div {
      width: 100%;
    }

    .contact-right-div {
      margin-top: 3rem;
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

  @media (min-width: 300px) and (max-width: 600px) {
    width: 100%;
    font-size: 5rem;
    text-align: center;
  }
`;

export const Text = styled.p`
  font-size: 1.8rem;
  color: ${colors.color3};
  text-align: justify;
  width: 70%;
`;
