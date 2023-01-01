import { Container, ContainerSecondary, Title, Text } from "./Contact.styled";

export default function Contact() {
  return (
    <Container>
      <ContainerSecondary>
        <div className="contact-left-div">
          <Title>Interested?</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lorem
            eros, luctus eu egestas vitae, hendrerit ut dui.
          </Text>
        </div>
        <div className="contact-right-div">
          <form method="POST" action="/">
            <label>Name</label>
            <input type="text" required />
            <label>Email</label>
            <input type="email" required />
            <button onClick={(e) => e.preventDefault()}>Submit</button>
          </form>
        </div>
      </ContainerSecondary>
    </Container>
  );
}
