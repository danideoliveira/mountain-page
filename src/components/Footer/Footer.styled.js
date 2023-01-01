import styled from "styled-components";
import { setFlexbox } from "../../helpers/Mixins";
import { colors } from "../../helpers/Colors";
import { images } from "../Images/Images";

export const Container = styled.footer`
  width: 100%;
  ${setFlexbox("center", "center", "row")};
  background-color: ${colors.color7};
`;

export const ContainerSecondary = styled.div`
  ${setFlexbox("space-between", "center", "column")};
  width: 100%;
  /* height: 100vh; */
  padding: 8rem 0 2rem 0;
  max-width: 1000px;

  a {
    font-size: 1.4rem;
    color: ${colors.color3};
    text-align: justify;
    width: 70%;
    margin-bottom: 0.7rem;
    color: ${colors.color3};
    transition: 0.3s;

    &:hover {
      transition: 0.3s;
      color: ${colors.color1};
    }
  }

  .copy-link {
    width: 100%;
    text-align: center;
  }

  .container-icons {
    ${setFlexbox("center", "center", "row")};
    width: 40%;
  }

  .container-footer-links {
    ${setFlexbox("space-between", "center", "row")};
    width: 100%;
    margin-bottom: 5rem;
  }

  .footer-left-div {
    ${setFlexbox("center", "center", "row")};
    width: 60%;
    height: 100%;
  }
  .footer-right-div {
    ${setFlexbox("center", "center", "column")};
    width: 40%;
    height: 100%;
  }

  .footer-contacts,
  .footer-address,
  .footer-menu {
    width: 35%;
    ${setFlexbox("center", "center", "column")};
  }

  .footer-contacts,
  .footer-address {
    border-right: 1px solid ${colors.color5};
  }
`;

export const Title = styled.h2`
  font-size: 1.8rem;
  color: ${colors.color1};
  margin-bottom: 1.5rem;
  font-weight: 400;
  width: 70%;
  text-align: left;
`;

export const Text = styled.p`
  font-size: 1.4rem;
  color: ${colors.color3};
  text-align: justify;
  width: 70%;
  margin-bottom: 0.7rem;
`;

export const Icon = styled.a`
  ${setFlexbox("center", "center", "row")};
  cursor: default;

  svg {
    font-size: 2rem;
    width: 2.5rem;
    color: ${colors.color5};
    transition: 0.3s;
    cursor: pointer;

    &:hover {
      transition: 0.3s;
      color: ${colors.color3};
    }
  }
`;
