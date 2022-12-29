import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: rgb(255,249,182);
  background: linear-gradient(0deg, rgba(255,249,182,1) 0%, rgba(224,153,37,1) 100%);

  img {
    width: 100%;
    height: 100%;
    position: absolute;
  }

  .title-div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    margin-top: 10rem;
  }
`;

export const Title = styled.h1`
  font-size: 6.4rem;
  color: #f5f5f5;
  z-index: 999;
  font-weight: 400;
`;