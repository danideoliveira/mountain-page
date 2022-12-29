import { Container, Logo } from "./About.styled";
import { images } from "../Images/Images";

export default function About() {
  return (
    <Container>
      <img className="vector" src={images.lake} alt="vector" />
      <div className="div-logo">
        <Logo src={images.logo} alt="vector" />
      </div>
    </Container>
  );
}
