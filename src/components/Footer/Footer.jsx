import { images } from "../Images/Images";
import { Container, ContainerSecondary, Title, Text } from "./Footer.styled";

export default function Footer() {
  return (
    <Container>
      <ContainerSecondary>
        <div className="footer-left-div">
          <div className="footer-contacts">
            <Title>Contacts</Title>
            <Text>(21)99999-9999</Text>
            <Text>youremail@email.com</Text>
          </div>
          <div className="footer-address">
            <Title>Address</Title>
            <Text>Hire Me, 021</Text>
            <Text>Rio de Janeiro</Text>
          </div>
          <div className="footer-menu">
            <Title>Menu</Title>
            <Text><a href="#">Home</a></Text>
            <Text><a href="#about">About</a></Text>
          </div>
        </div>
        <div className="footer-right-div">
          <img src={images.logo} alt='logo'/>
        </div>
      </ContainerSecondary>
    </Container>
  );
}
