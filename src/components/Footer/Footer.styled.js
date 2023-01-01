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
  ${setFlexbox("space-between", "center", "row")};
  width: 100%;
  /* height: 100vh; */
  padding: 10rem 0;
  max-width: 1000px;

  .footer-left-div {
    ${setFlexbox("center", "center", "row")};
    width: 60%;
    height: 100%;
  }
  .footer-right-div {
    ${setFlexbox("center", "center", "row")};
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

  a {
    color: ${colors.color3};
  }
`;
