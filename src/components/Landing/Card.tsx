import { motion } from "framer-motion";
import styled from "styled-components";
import { Button } from "../../styles/GeneralStyles";

interface Card {
  title: string;
  img: string;
  onClick: () => void;
}
const Card = ({ title, img, onClick }: Card) => {
  return (
    <CardDiv
      className="card"
      onClick={onClick}
      as={motion.div}
      whileHover={{ scale: 0.9, opacity: 1 }}
    >
      <CardButton>{title}</CardButton>
      <img src={img} alt="" />
    </CardDiv>
  );
};

export default Card;

const CardDiv = styled.div`
  align-items: center;
  justify-content: center;
  width: 100%;
  display: flex;
  border: 1px solid rgb(219, 219, 232);
  border-radius: 2rem;
  flex-direction: column-reverse;
  padding: 5rem;
  cursor: pointer;
  img {
    z-index: 8;
    width: 100%;
  }
`;
const CardButton = styled(Button)`
  z-index: 10;
  bottom: 0;
  font-weight: 700;
  font-size: 2.2rem;
  padding: 2rem 3rem;
  padding: 2rem;
  cursor: pointer;
`;
