import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: radial-gradient(50% 50% at 50% 50%, #FF9A29 0%, #FC5C52 100%);

  img {
    width: 100%;
    /* height: 100%; */
    position: absolute;
    bottom: 0;
  }

  .title-div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    margin-top: 10rem;
  }

  .vector-mb {
    display: none;
  }

  @media (min-width: 300px) and (max-width: 999px) and (orientation: portrait) {
    .vector-desktop {
      display: none;
    }
    .vector-mb {
      display: initial;
    }
  }
`;

export const Title = styled.h1`
  font-size: 6.4rem;
  color: #f5f5f5;
  z-index: 999;
  font-weight: 400;
`;