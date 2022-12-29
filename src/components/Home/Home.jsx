import { images } from "../Images/Images";
import { Container, Title } from "./Home.styled";

export default function Home() {
  return (
    <Container>
      <div className="title-div">
        <Title>Mountains</Title>
      </div>
      <img src={images.background} alt="vector" />
      <img src={images.sun} alt="vector" />
      <img src={images.mtnBack2} alt="vector" />
      <img src={images.mtnBack} alt="vector" />
      <img src={images.mtnFront} alt="vector" />
    </Container>
  );
}
