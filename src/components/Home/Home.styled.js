import styled, { css, keyframes } from "styled-components";
import { motion } from "framer-motion";
import { colors } from "../../helpers/Colors";
import { setFlexbox } from "../../helpers/Mixins";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  /* background: radial-gradient(50% 50% at 50% 50%, #FF9A29 0%, #FC5C52 100%); */
  overflow: hidden;

  .container-desktop {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    top: 6.5rem;
  }

  .container-mobile {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    top: 10rem;
  }

  img {
    width: 100%;
    /* height: 100%; */
    position: absolute;
    bottom: 0;
    transition: 0.3s all ease;
    user-select: none;
    z-index: 995;
  }

  .title-div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    padding-bottom: 20rem;
    flex-direction: column;
  }

  .vector-mb {
    display: none;
  }

  @media (min-width: 300px) and (max-width: 600px) {
    .title-div {
      z-index: 999;
      padding-bottom: 25rem;
    }

    .container-mobile {
      top: 5rem;
    }
  }

  @media (min-width: 601px) and (max-width: 880px) {
    & {
      margin-top: 10rem;
    }
    .title-div {
      padding-bottom: 60rem;
    }
  }

  @media (min-width: 300px) and (max-width: 999px) and (orientation: portrait) {
    .container-desktop,
    .vector-desktop {
      display: none;
    }

    .vector-mb {
      display: initial;
    }
  }
`;

export const Title = styled.h1`
  font-size: 9.6rem;
  color: ${colors.color1};
  z-index: 994;
  font-weight: 400;
  user-select: none;
  transition: 0.5s ease-in;

  @media (min-width: 300px) and (max-width: 999px) {
    margin: 4rem 0 2rem 0;
    font-size: 6.4rem;
  }
`;

export const Button = styled(motion.a)`
  ${setFlexbox("center", "center", "row")};
  width: 15%;
  height: 6rem;
  color: ${colors.color1};
  background-color: #00000000;
  border: 2px solid ${colors.color1};
  z-index: 999;
  font-size: 2.5rem;
  padding: 5px;
  border-radius: 10px;
  cursor: pointer;
  text-align: center;

  &:hover {
    background-color: ${colors.color1};
    color: ${colors.color2};
  }

  @media (min-width: 300px) and (max-width: 999px) {
    width: 40%;
  }
`;
