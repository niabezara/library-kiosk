import styled from "styled-components";
import Selected from "../components/CategoryDetail";
import { Container } from "../styles/GeneralStyles";

export default function CategoryDetail() {
  return (
    <StyledHero>
      <Selected />
    </StyledHero>
  );
}

const StyledHero = styled(Container)`
  position: relative;
  max-width: none;
  min-height: 100vh;
  h2 {
    font-size: 1.2rem;
    font-weight: lighter;
    margin-bottom: 0rem;
    span {
      font-family: "Poppins", sans-serif;
      font-size: 4rem;
      font-weight: 800;
    }
  }
`;
