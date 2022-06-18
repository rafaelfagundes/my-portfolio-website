import styled from "@emotion/styled";

const StyledCard = styled.div<{
  size: number;
  image: string;
}>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background: url(${(props) => props.image});
  background-size: cover;
`;

type Props = {
  id: number;
  image: string;
  title: string;
  size: number;
  flipped: boolean;
  onClick: any;
};

function Card(props: Props) {
  return (
    <StyledCard
      size={props.size}
      image={`/img/memory/${props.flipped ? props.image : "back.png"}`}
      onClick={() => {
        props.onClick();
      }}
    ></StyledCard>
  );
}

export default Card;
