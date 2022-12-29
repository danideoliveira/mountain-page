import { Container } from "./About.styled";
import { images } from "../Images/Images";

export default function About() {
  return (
    <Container>
      <img src={images.lake} alt="vector" />
    </Container>
  );
}
