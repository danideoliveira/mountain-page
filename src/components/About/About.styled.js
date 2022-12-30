import styled from "styled-components";
import { setFlexbox } from "../../helpers/Mixins";
import { colors } from "../../helpers/Colors";

export const Container = styled.div`
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
  }
`;

export const Logo = styled.img`
  margin: 0 auto;
`;
