import styled from "styled-components";
import { setFlexbox } from "../../helpers/Mixins";
import { colors } from "../../helpers/Colors";
import { motion } from "framer-motion";

export const Container = styled.div`
  ${setFlexbox("center", "center", "row")}
  width: 100%;
  background-color: ${colors.color2};
`;

export const ContainerSecondary = styled(motion.div)`
  width: 100%;
  position: relative;
  padding: 20rem 0;
  max-width: 1000px;

  .vector {
    top: 0;
  }

  .div-logo {
    ${setFlexbox("center", "center", "column")}
    width: 100%;
    height: 100%;
    margin-bottom: 15rem;
    padding-top: 2rem;

    div {
      ${setFlexbox("center", "center", "column")}
    }
  }

  .card-container {
    ${setFlexbox("center", "center", "row")}
    margin: 0 auto;
    width: 90%;
  }

  @media (min-width: 300px) and (max-width: 600px) {
    .card-container {
      flex-direction: column;
    }
  }
`;

export const Logo = styled(motion.img)`
  width: 250px;
  margin-bottom: 2rem;
`;

export const Title = styled.h2`
  font-size: 3.2rem;
  color: ${colors.color1};
  margin-bottom: 1rem;
`;

export const Text = styled.p`
  font-size: 1.8rem;
  color: ${colors.color3};
  text-align: justify;
  width: 60%;
`;
