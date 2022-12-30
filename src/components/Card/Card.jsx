import { CardItem } from "./Card.styled";
export default function Card({img}) {
  return (
    <CardItem>
      <img src={img} alt="mountain" />
    </CardItem>
  );
}
