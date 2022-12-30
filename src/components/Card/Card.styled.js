import styled from "styled-components";
import { colors } from "../../helpers/Colors";
import { setFlexbox } from "../../helpers/Mixins";

export const CardItem = styled.div`
  margin: 0 1rem;
  border-radius: 10px;
  overflow: hidden;
  transition: 0.1s ease-in;
  position: relative;
  width: 30rem;
  height: 40rem;
  user-select: none;

  &:hover {
    transform: translateY(-0.5rem);
    transition: 0.1s ease-in-out;

    .hover-div {
      opacity: 1;
      height: 100%;
      transition: 0.4s ease-out;
      border-radius: 10px;

      div {
        opacity: 1;
      }
    }
  }

  .hover-div {
    ${setFlexbox("center", "center", "column")}
    background-color: #00000099;
    transition: 0.2s ease-in;
    opacity: 0;
    height: 0%;
    width: 100%;
    position: absolute;

    div {
      font-size: 3rem;
      color: ${colors.color1};
    }

    p {
      font-size: 1.6rem;
      color: ${colors.color1};
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
