import { images } from "../Images/Images";
import {
  Container,
  ContainerSecondary,
  Title,
  Text,
  Icon,
} from "./Footer.styled";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <Container>
      <ContainerSecondary>
        <div className="container-footer-links">
          <div className="footer-left-div">
            <div className="footer-contacts">
              <Title>Contacts</Title>
              <Text>(21) 99999-9999</Text>
              <Text>youremail@email.com</Text>
            </div>
            <div className="footer-address">
              <Title>Address</Title>
              <Text>Hire Me, 021</Text>
              <Text>Rio de Janeiro</Text>
            </div>
            <div className="footer-menu">
              <Title>Menu</Title>
              <Text>
                <a href="#">Home</a>
              </Text>
              <Text>
                <a href="#about">About</a>
              </Text>
            </div>
          </div>
          <div className="footer-right-div">
            <img src={images.logoBw} alt="logo" />
            <div className="container-icons">
              <Icon href="#">
                <FaTwitter />
              </Icon>
              <Icon href="#">
                <FaFacebook />
              </Icon>
              <Icon href="#">
                <FaInstagram />
              </Icon>
            </div>
          </div>
        </div>
        <a target="_blank" href="https://www.linkedin.com/in/devdani/" className="copy-link">
          Daniel de Oliveira Santos &copy; 2022
        </a>
      </ContainerSecondary>
    </Container>
  );
}
