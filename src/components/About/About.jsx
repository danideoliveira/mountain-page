import {
  Container,
  ContainerSecondary,
  Logo,
  Text,
  Title,
} from "./About.styled";
import { images } from "../Images/Images";
import { Fade } from "react-awesome-reveal";
import Card from "../Card/Card";

export default function About() {
  const cardContent = [
    { img: images.cardImg1 },
    { img: images.cardImg2 },
    { img: images.cardImg3 },
  ];
  return (
    <Container>
      <ContainerSecondary>
        <div id="about" className="div-logo">
          <Fade cascade direction="up">
            <Logo src={images.logo} alt="vector" />
            <Title>Lorem Ipsum</Title>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lorem
              eros, luctus eu egestas vitae, hendrerit ut dui. Cras commodo
              blandit arcu, at malesuada sapien feugiat quis. Vivamus vulputate
              nisl vitae leo elementum, sed vulputate libero porta. Nunc ut
              risus non enim dictum fringilla id vitae urna.{" "}
            </Text>
          </Fade>
        </div>

        <div className="card-container">
          {cardContent.map((card) => (
            <Card img={card.img} key={card.img} />
          ))}
        </div>
      </ContainerSecondary>
    </Container>
  );
}
