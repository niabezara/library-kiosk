import { motion } from "framer-motion";
import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.5rem;
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
  &::after {
    content: url("/top-blob.svg");
    position: absolute;
    bottom: 0px;
    left: -30.4rem;
    overflow-x: hidden;
    z-index: -20;
  }

  &::before {
    content: url("/top-blob.svg");
    position: absolute;
    top: 0;
    right: -40.4rem;
    overflow-x: hidden;
    z-index: -20;
  }
  @media screen and (min-width: 1024px) {
    gap: 10.5rem;
  }
`;

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
    font-size: 2.5rem;
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
  }
  /* 
  .carousel-control.prev {
    left: 1rem;
  }

  .carousel-control.next {
    right: 1rem;
  } */
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
