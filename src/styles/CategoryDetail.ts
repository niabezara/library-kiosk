import styled from "styled-components";
import { Container } from "./GeneralStyles";

export const Containerdiv = styled(Container)`
  flex-direction: column;
  gap: 20px;
  @media screen and (min-width: 700px) {
    margin: 3rem;
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
  h1 {
    font-size: 2.5rem;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 400px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 700px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Wrapper = styled.div`
  border: 2px solid rgb(219, 219, 232);
  border-radius: 15px;
  position: relative;
  transition: all 0.25s ease-in-out 0s;
  cursor: pointer;
  img {
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    width: 100%;
    max-height: 300px;
    object-fit: cover;
  }
  .info {
    padding: 2rem;
    h2 {
      font-size: 2.2rem;
    }
    p {
      font-size: 1.3rem;
    }
  }
`;
