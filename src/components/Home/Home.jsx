import { images } from "../Images/Images";
import { Container, Title } from "./Home.styled";

export default function Home() { 
  window.addEventListener("scroll", function () {
    const sun = document.querySelector(".container-desktop > .sun");
    const mtnBack2 = document.querySelector(".container-desktop > .mtn-back-2");
    const mtnBack = document.querySelector(".container-desktop > .mtn-back");
    const mtnFront = document.querySelector(".container-desktop > .mtn-front");

    const vectorsDesktop = document.querySelectorAll(".vector-desktop");
    const vectorsMobile = document.querySelectorAll(".vector-mb");
    let initialValue = 0.3;

    const scroll_value = window.scrollY;

    vectorsDesktop.forEach(vector => {
      if(vector.classList.contains('tree-front')) return;
      vector.style.bottom = scroll_value * initialValue + "px";
      initialValue -= 0.09;
    });

    vectorsMobile.forEach(vector => {
      if(vector.classList.contains('tree-front')) return;
      vector.style.bottom = scroll_value * initialValue + "px";
      initialValue -= 0.1;
    });


    // sun.style.bottom = scroll_value * 0.3 + "px";
    // mtnBack2.style.bottom = scroll_value * 0.25 + "px";
    // mtnBack.style.bottom = scroll_value * 0.15 + "px";
    // mtnFront.style.bottom = scroll_value * 0.1 + "px";
  });

  return (
    <Container>
      <div className="title-div">
        <Title>Mountains</Title>
      </div>

      <div className="container-desktop">
        <img
          src={images.sun}
          className="sun vector vector-desktop"
          alt="vector"
        />
        <img
          src={images.mtnBack2}
          className="mtn-back-2 vector vector-desktop"
          alt="vector"
        />
        <img
          src={images.mtnBack}
          className="mtn-back vector vector-desktop"
          alt="vector"
        />
        <img
          src={images.mtnFront}
          className="mtn-front vector vector-desktop"
          alt="vector"
        />
        <img
          src={images.treeFront}
          className="tree-front vector vector-desktop"
          alt="vector"
        />
      </div>

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
    </Container>
  );
}
