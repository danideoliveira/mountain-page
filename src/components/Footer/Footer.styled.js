import styled from "styled-components";
import { setFlexbox } from "../../helpers/Mixins";
import { colors } from "../../helpers/Colors";

export const Container = styled.footer`
  width: 100%;
  ${setFlexbox("center", "center", "row")};
  background-color: ${colors.color7};
`;

export const ContainerSecondary = styled.div`
  ${setFlexbox("space-between", "center", "column")};
  width: 100%;
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
    width: 90%;
    margin-bottom: 5rem;
  }

  .footer-left-div {
    ${setFlexbox("center", "center", "row")};
    width: 70%;
    height: 100%;
  }
  .footer-right-div {
    ${setFlexbox("center", "center", "column")};
    width: 40%;
    height: 100%;

    img {
      width: 250px;
    }
  }

  .footer-contacts,
  .footer-address,
  .footer-menu {
    width: 35%;
    height: 8rem;
    ${setFlexbox("flex-start", "center", "column")};
    overflow-wrap: anywhere;
  }

  .footer-contacts,
  .footer-address {
    border-right: 1px solid ${colors.color5};
  }

  @media (min-width: 300px) and (max-width: 600px) {
    .container-footer-links,
    .footer-left-div {
      flex-direction: column;
    }

    .container-icons {
      width: 100%;
    }

    .footer-left-div {
      width: 90%;
    }

    .footer-right-div {
      margin-top: 3rem;
    }

    .footer-contacts,
    .footer-address,
    .footer-menu {
      width: 100%;
      margin-bottom: 3rem;
      border-right: 0;
    }
  }
`;

export const Title = styled.h2`
  font-size: 1.8rem;
  color: ${colors.color1};
  margin-bottom: 1.5rem;
  font-weight: 400;
  width: 80%;
  text-align: left;

  @media (min-width: 300px) and (max-width: 600px) {
    text-align: center;
  }
`;

export const Text = styled.p`
  font-size: 1.4rem;
  color: ${colors.color3};
  text-align: justify;
  width: 80%;
  margin-bottom: 0.7rem;

  @media (min-width: 300px) and (max-width: 600px) {
    text-align: center;
  }
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
