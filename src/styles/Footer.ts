import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  padding: 5rem 2rem;
`;

export const Footer = styled(motion.footer)`
  width: 100%;
  background: ${(props) => props.theme.secondBackground};
`;

export const StyledFooter = styled(Container)`
  flex-direction: column;
  padding: 2rem;
  text-align: center;
  gap: 0.5rem;
  p {
    font-size: 1.2rem;
  }
  .githubIcon {
    width: 2rem;
    height: 2rem;
    fill: var(--color-header);
  }
`;
