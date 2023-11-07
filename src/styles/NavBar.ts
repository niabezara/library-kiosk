import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.header)`
  z-index: 1;
  left: 0;
  right: 0;
  background: linear-gradient(
    to bottom,
    var(--color-bg) 0%,
    rgba(0, 0, 0, 0) 100%
  );
`;

export const StyledNav = styled(motion.nav)`
  align-items: center;
  max-width: 1080px;
  margin: auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: 700px) {
    padding: 3rem 4rem;
  }
`;

export const Label = styled.label`
  cursor: pointer;
  input {
    opacity: 0;
    margin: 0;
    padding: 0;
    width: 0;
  }
  .light-icon {
    width: 1.5rem;
    height: 1.5rem;
    color: var(--color-main);
  }
`;

export const Logo = styled(motion.div)`
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 2rem;
  img {
    width: 3rem;
    height: 3rem;
  }
  h1 {
    font-weight: 400;
    font-size: 2rem;
    color: var(--color-main);
  }
`;
