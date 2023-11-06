import styled from "styled-components";

interface Card {
  title: string;
  img: string;
  onClick: () => void;
}
const Card = ({ title, img, onClick }: Card) => {
  return (
    <CardDiv className="card" onClick={onClick}>
      <button>{title}</button>
      <img src={img} alt="" />
    </CardDiv>
  );
};

export default Card;

const CardDiv = styled.div`
  align-items: center;
  width: 100%;
  justify-content: center;
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  button {
    z-index: 10;
    bottom: 0;
    background-color: transparent;
    border: 2px solid black;
    color: #8653e4;
    font-weight: 700;
    padding: 1rem;
  }
  img {
    z-index: 8;
    width: 100%;
  }
`;
