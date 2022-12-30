import { CardItem } from "./Card.styled";
export default function Card({img}) {
  return (
    <CardItem>
      <div className="hover-div">
        <div>Lorem</div>
        <p>lorem ipsum.</p>
      </div>
      <img src={img} alt="mountain" />
    </CardItem>
  );
}
