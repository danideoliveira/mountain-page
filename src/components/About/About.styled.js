import styled from "styled-components";
import { setFlexbox } from "../../helpers/Mixins";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #090210;
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
