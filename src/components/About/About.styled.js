import styled from "styled-components";
import { setFlexbox } from "../../helpers/Mixins";
import { colors } from "../../helpers/Colors";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  width: 100%;
  background-color: ${colors.color2};
  position: relative;
  padding: 20rem 0;

  .vector {
    top: 0;
  }

  .div-logo {
    ${setFlexbox("center", "center", "column")}
    width: 100%;
    height: 100%;
    margin-bottom: 15rem;

    div {
      ${setFlexbox("center", "center", "column")}
    }
  }

  .card-container {
    ${setFlexbox("center", "center", "row")}
    margin: 0 auto;
    width: 90%;
  }
`;

export const Logo = styled(motion.img)`
  margin-bottom: 2rem;
`;

export const Text = styled.p`
  font-size: 1.8rem;
  color: ${colors.color3};
  text-align: justify;
  width: 50%;
`;
