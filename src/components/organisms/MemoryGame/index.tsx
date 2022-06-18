import styled from "@emotion/styled";
import _ from "lodash";
import { useEffect, useState } from "react";
import Card from "../../atoms/card";

type CardType = {
  id: number;
  name: string;
  image: string;
  flipped: boolean;
};

const StyledMemoryGame = styled.div<{ size: number }>`
  display: flex;
  height: ${(props) => props.size * 4}px;
  width: ${(props) => props.size * 4}px;
  flex-wrap: wrap;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
`;

const WIDTH = 600;

const cardDeck = [
  {
    id: 0,
    name: "Ambition",
    image: "ambition.png",
    flipped: false,
  },
  {
    id: 0,
    name: "Creativity",
    image: "creativity.png",
    flipped: false,
  },
  {
    id: 0,
    name: "Empathy",
    image: "empathy.png",
    flipped: false,
  },
  {
    id: 0,
    name: "Flexibility",
    image: "flexibility.png",
    flipped: false,
  },
  {
    id: 0,
    name: "Problem Solving",
    image: "problem-solving.png",
    flipped: false,
  },
  {
    id: 0,
    name: "Self-Discipline",
    image: "self-discipline.png",
    flipped: false,
  },
  {
    id: 0,
    name: "Teamwork",
    image: "teamwork.png",
    flipped: false,
  },
  {
    id: 0,
    name: "Time Management",
    image: "time-management.png",
    flipped: false,
  },
];

function MemoryGame() {
  const [cards, setCards] = useState<CardType[]>([]);

  const selectCard = (card: CardType) => {
    const _cards = _.cloneDeep(cards);

    _cards?.forEach((c) => {
      if (c.id === card.id) {
        c.flipped = !card.flipped;
      }
    });

    setCards(_cards);
  };

  useEffect(() => {
    if (cards.length === 0) {
      let _cards1 = _.cloneDeep(cardDeck);
      let _cards2 = _.cloneDeep(cardDeck);

      const newCards = _cards1.concat(_cards2);
      newCards.forEach((c, i) => {
        newCards[i].id = i;
      });

      setCards(_.shuffle(newCards));
    }
  }, [cards]);

  return (
    <StyledMemoryGame size={WIDTH / 4}>
      {cards.map((c, i) => (
        <Card
          key={c.image + i}
          id={c.id}
          image={c.image}
          title={c.name}
          size={WIDTH / 4}
          onClick={() => selectCard(c)}
          flipped={c.flipped}
        ></Card>
      ))}
    </StyledMemoryGame>
  );
}

export default MemoryGame;
