import styled from "styled-components";
import { setFlexbox } from "../../helpers/Mixins";
import { colors } from "../../helpers/Colors";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  width: 100%;
  height: 100vh;
  background-color: ${colors.color2};
  position: relative;

  .vector {
    top: 0;
  }

  .div-logo {
    ${setFlexbox('center', 'center', 'row')}
    width: 100%;
    height: 100%;
  }
`;

export const Logo = styled(motion.img)`
  margin: 0 auto;
`;
