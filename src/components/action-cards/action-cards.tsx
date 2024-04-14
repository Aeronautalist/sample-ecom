import "./action-cards.css";
import { SlIcon } from "@shoelace-style/shoelace/dist/react";

type actionCardsProps = {
  cards: Array<Object> | undefined | null;
};

function ActionCards({ cards = [] }: actionCardsProps) {
  return (
    <div id="action-cards">
      {cards.map((card, i) => (
        <div className="action-card" key={i}>
          <SlIcon
            className="action-card-icon"
            name={card.icon || "phone-fill"}
          ></SlIcon>
          {card.text}
        </div>
      ))}
    </div>
  );
}

export default ActionCards;
