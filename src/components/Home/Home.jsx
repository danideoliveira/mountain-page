import { images } from "../Images/Images";
import { Container, Title } from "./Home.styled";

export default function Home() {
  return (
    <Container>
      <div className="title-div">
        <Title>Mountains</Title>
      </div>
      <img src={images.sun} className="vector vector-desktop" alt="vector" />
      <img src={images.mtnBack2} className="vector vector-desktop" alt="vector" />
      <img src={images.mtnBack} className="vector vector-desktop" alt="vector" />
      <img src={images.mtnFront} className="vector vector-desktop" alt="vector" />
      <img src={images.treeFront} className="vector vector-desktop" alt="vector" />

      <img src={images.sunMobile} className="vector vector-mb" alt="vector" />
      <img src={images.mtnBack2Mobile} className="vector vector-mb" alt="vector" />
      <img src={images.mtnBackMobile} className="vector vector-mb" alt="vector" />
      <img src={images.mtnFrontMobile} className="vector vector-mb" alt="vector" />
      <img src={images.treeFrontMobile} className="vector vector-mb" alt="vector" />
    </Container>
  );
}
