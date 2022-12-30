import { Container, Logo } from "./About.styled";
import { images } from "../Images/Images";
import { Fade } from "react-awesome-reveal";

export default function About() {
  return (
    <Container>
      <div className="div-logo">
        <Fade cascade direction="up">
          <Logo src={images.logo} alt="vector" />
        </Fade>
      </div>
    </Container>
  );
}
