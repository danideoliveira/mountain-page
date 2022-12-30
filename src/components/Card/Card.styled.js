import styled from "styled-components";

export const CardItem = styled.div`
  margin: 0 1rem;
  border-radius: 10px;
  overflow: hidden;
  transition: 0.1s ease-in;

  &:hover {
    transform: translateY(-1rem);
    transition: 0.1s ease-in-out;
  }

  img {
    width: 100%;
  }
`;
