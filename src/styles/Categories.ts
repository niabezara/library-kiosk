import { motion } from "framer-motion";
import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 4rem;

  .SubCard {
    max-width: 1080px;
    position: absolute;
  }
  @media (min-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }

  h1 {
    font-size: 2.2rem;
    font-weight: 700;
  }
  .page {
    font-size: 1.1rem;
    font-weight: 700;
  }
  .carousel-control {
    color: #ffffff;
    border: none;
    font-size: 1.5rem;
    padding: 0.5rem 1rem;
    background-color: #38add2;
    border: none;
    align-items: center;
    outline: none;
    justify-content: center;
    border-radius: 100%;
    margin-left: 2rem;
    margin-right: 2rem;
    height: 40px;
    width: 40px;
    transition: 0.3s ease;
    cursor: pointer;
    @media (min-width: 900px) {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  .carousel-control.prev {
    left: 1rem;
  }

  .carousel-control.next {
    right: 1rem;
  }
`;

export const Button = styled(motion.button)`
  background-color: transparent;
  color: var(--color-header);
  border: 1px solid var(--color-header);
  box-shadow: 1px 1px 2px #a7a6ba;
  font-size: 1rem;
  display: inline-block;
  position: relative;
  padding: 3px 14px;
  margin-right: 6px;
  margin-bottom: 6px;
  line-height: 1.5;
  text-transform: uppercase;
  border-radius: 25px;
  cursor: pointer;
  &:hover {
    background-color: #d0deed;
    color: #192655;
    opacity: 0.9;
  }
  @media (min-width: 700px) {
    font-size: 1.5rem;
  }
`;
