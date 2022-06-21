import { Box, Image } from "@chakra-ui/react";
import styled from "@emotion/styled";
import _ from "lodash";
import { useEffect, useState } from "react";
import Button from "../../atoms/button";
import Card from "../../atoms/card";
import SoftSkillIconLabel from "../../atoms/soft-skill-icon-label";

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
  const [cardsMatched, setCardsMatched] = useState<string[]>([]);
  const [currentCards, setCurrentCards] = useState<CardType[]>([]);

  const isFlipped = (card: CardType): boolean => {
    const currentCardsIds = currentCards.map((c) => c.id);

    if (cardsMatched.includes(card.image)) return true;
    if (currentCardsIds.includes(card.id)) return true;

    return false;
  };

  const selectCard = (card: CardType) => {
    if (isFlipped(card)) return;
    if (currentCards.length === 0 || currentCards.length === 2) {
      setCurrentCards([card]);
    } else {
      setCurrentCards([card, ...currentCards]);
    }
  };

  const shuffleCards = () => {
    let _cards1 = _.cloneDeep(cardDeck);
    let _cards2 = _.cloneDeep(cardDeck);

    const newCards = _cards1.concat(_cards2);
    newCards.forEach((c, i) => {
      newCards[i].id = i;
    });

    setCards(_.shuffle(newCards));
  };

  const getMatchedCards = () => {
    let _cards: CardType[] = [];

    cardsMatched.forEach((c) => {
      const card = cards.find((card) => card.image === c);
      if (card) {
        _cards.push(card);
      }
    });

    return _cards;
  };

  const reset = () => {
    setCardsMatched([]);
    setCurrentCards([]);
    shuffleCards();
  };

  useEffect(() => {
    if (currentCards.length === 2) {
      if (currentCards[0].image === currentCards[1].image) {
        if (!cardsMatched.includes(currentCards[0].image)) {
          setCardsMatched([...cardsMatched, currentCards[0].image]);
        }
      }
    }
  }, [currentCards, cardsMatched]);

  useEffect(() => {
    if (cards.length === 0) {
      shuffleCards();
    }
  }, [cards]);

  return (
    <Box display="flex">
      <Box mr={10}>
        <StyledMemoryGame size={WIDTH / 4}>
          {cards.map((c, i) => (
            <Card
              key={c.image + i}
              id={c.id}
              image={c.image}
              title={c.name}
              size={WIDTH / 4}
              onClick={() => selectCard(c)}
              flipped={isFlipped(c)}
            ></Card>
          ))}
        </StyledMemoryGame>
        {cardsMatched.length === cardDeck.length && (
          <>
            <Box mb={5}></Box>
            <Button isMobile={false} size={50} onClick={reset}>
              Reset
            </Button>
          </>
        )}
      </Box>
      <Box>
        {getMatchedCards().map((c: CardType) => (
          <SoftSkillIconLabel
            key={c.id}
            label={c.name}
            icon={c.image}
          ></SoftSkillIconLabel>
        ))}
      </Box>
      <>
        {/* Preload Images To Avoid Loading When Card Is Flipped */}
        <span style={{ display: "none" }}>
          <Image alt="Hidden Card" src="/img/memory/ambition.png"></Image>
          <Image alt="Hidden Card" src="/img/memory/creativity.png"></Image>
          <Image alt="Hidden Card" src="/img/memory/empathy.png"></Image>
          <Image alt="Hidden Card" src="/img/memory/flexibility.png"></Image>
          <Image
            alt="Hidden Card"
            src="/img/memory/problem-solving.png"
          ></Image>
          <Image
            alt="Hidden Card"
            src="/img/memory/self-discipline.png"
          ></Image>
          <Image alt="Hidden Card" src="/img/memory/teamwork.png"></Image>
          <Image
            alt="Hidden Card"
            src="/img/memory/time-management.png"
          ></Image>
        </span>
      </>
    </Box>
  );
}

export default MemoryGame;
