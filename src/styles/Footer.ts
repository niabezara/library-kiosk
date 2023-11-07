import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1080px;
  margin: auto;
  padding: 5rem 2rem;
`;

export const Div = styled(motion.div)`
  background: ${(props) => props.theme.secondBackground};
`;

export const StyledFooter = styled(Container)`
  flex-direction: column;
  padding: 2rem;
  text-align: center;
  gap: 0.5rem;
  p {
    font-size: 0.7rem;
  }
`;
