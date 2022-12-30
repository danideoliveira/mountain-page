import { images } from "../Images/Images";
import { Container, Title, Button } from "./Home.styled";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => setScrollY(window.scrollY));
    return () =>
      window.removeEventListener("scroll", () => setScrollY(window.scrollY));
  }, []);

  return (
    <Container>
      <div className="title-div">
        <Title className="home-title">Mountains</Title>
        <Button>Discover</Button>
      </div>

      <div className="container-desktop">
        <img
          src={images.sun}
          className="sun vector vector-desktop"
          alt="vector"
          style={{ bottom: scrollY < 661 ? scrollY * 0.25 : 0 }}
        />
        <img
          src={images.mtnBack2}
          className="mtn-back-2 vector vector-desktop"
          alt="vector"
          style={{ bottom: scrollY < 661 ? scrollY * 0.15 : 0 }}
        />
        <img
          src={images.mtnBack}
          className="mtn-back vector vector-desktop"
          alt="vector"
          style={{ bottom: scrollY < 661 ? scrollY * -0.15 : 0 }}
        />
        <img
          src={images.mtnFront}
          className="mtn-front vector vector-desktop"
          alt="vector"
          style={{ bottom: scrollY < 661 ? scrollY * 0.1 : 0 }}
        />
        <img
          src={images.treeFront}
          className="tree-front vector vector-desktop"
          alt="vector"
        />
      </div>

      <div className="container-mobile">
        <img
          src={images.sunMobile}
          className="sun vector vector-mb"
          alt="vector"
        />
        <img
          src={images.mtnBack2Mobile}
          className="mtn-back-2 vector vector-mb"
          alt="vector"
        />
        <img
          src={images.mtnBackMobile}
          className="mtn-back vector vector-mb"
          alt="vector"
        />
        <img
          src={images.mtnFrontMobile}
          className="mtn-front vector vector-mb"
          alt="vector"
        />
        <img
          src={images.treeFrontMobile}
          className="tree-front vector vector-mb"
          alt="vector"
        />
      </div>
    </Container>
  );
}
