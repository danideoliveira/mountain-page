import styled from "styled-components";
import { setFlexbox } from "../../helpers/Mixins";
import { colors } from "../../helpers/Colors";
import { images } from "../Images/Images";

export const Container = styled.div`
  ${setFlexbox("center", "center", "row")};
  width: 100%;
  height: 100vh;
  background-image: url(${images.mtnBackground});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  position: relative;
`;

export const ContainerSecondary = styled.div`
  ${setFlexbox("center", "center", "column")};
  width: 100%;
  padding: 20rem 0;
  max-width: 1000px;

  .custom-shape-divider-top-1672519728 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
  }

  .custom-shape-divider-top-1672519728 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 90px;
  }

  .custom-shape-divider-top-1672519728 .shape-fill {
    fill: #090210;
  }
`;

export const Title = styled.h2`
  font-size: 8.6rem;
  color: ${colors.color1};
  margin-bottom: 1.5rem;
  font-weight: 400;

  @media (min-width: 300px) and (max-width: 600px) {
    font-size: 5rem;
    width: 90%;
    text-align: center;
  }
`;

export const Text = styled.p`
  font-size: 1.8rem;
  color: ${colors.color3};
  text-align: justify;
  width: 70%;
`;
