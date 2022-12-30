import styled from "styled-components";
import { colors } from "../../helpers/Colors";

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
    padding-bottom: 17rem;
    flex-direction: column;
  }

  .vector-mb {
    visibility: hidden;
  }

  @media (min-width: 300px) and (max-width: 999px) and (orientation: portrait) {
    .vector-desktop {
      visibility: hidden;
    }
    .vector-mb {
      visibility: visible;
    }
  }
`;

export const Title = styled.h1`
  font-size: 6.4rem;
  color: ${colors.color1};
  z-index: 994;
  font-weight: 400;
  user-select: none;
  transition: 0.5s ease-in;
`;

export const Button = styled.button`
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
  transition: 0.3s ease;

  &:hover {
    background-color: ${colors.color1};
    color: ${colors.color2};
  }
`;