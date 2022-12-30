import { images } from "../Images/Images";
import { Container, Title, Button } from "./Home.styled";
import { useEffect, useState } from "react";

export default function Home() {
  function setParallax() {
    const vectorsDesktop = document.querySelectorAll(".vector-desktop");
    const title = document.querySelector(".home-title");
    const vectorsMobile = document.querySelectorAll(".vector-mb");
    const scrollValue = window.scrollY;
    let initialValue = 0.3;
    
    vectorsDesktop.forEach((vector) => {
      if (vector.classList.contains("tree-front")) return;
      // title.style.paddingBottom =  400 + "px";
      vector.style.bottom = scrollValue * initialValue + "px";
      initialValue -= 0.09;
    });

    vectorsMobile.forEach((vector) => {
      if (vector.classList.contains("tree-front")) return;
      vector.style.bottom = scrollValue * initialValue + "px";
      initialValue -= 0.09;
    });
  }

  function teste() {
    const title = document.querySelector(".home-title");
    window.scrollY > 80
      ? (title.style.color = "red")
      : (title.style.color = "#f5f5f5");
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setParallax();
    });
    return () => window.removeEventListener("scroll", setParallax);
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
