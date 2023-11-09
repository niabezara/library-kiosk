import { motion } from "framer-motion";
import styled from "styled-components";
import { Container } from "../../styles/GeneralStyles";

export default function PageHeader() {
  return (
    <Head
      initial={{ y: -250 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.1, type: "spring", stiffness: 20 }}
      as={motion.div}
    >
      <h1>Explore collection</h1>
      <h2>There's something for everybody</h2>
    </Head>
  );
}

const Head = styled(Container)`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  font-size: 15px;
  font-weight: 700;
  position: relative;
  letter-spacing: 2px;
  z-index: -10;
  text-transform: uppercase;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    width: 100%;
    left: 0;
    opacity: 1.5;
    height: 0.5px;
    background-color: #e3e3e3;
  }

  h1,
  h2 {
    color: var(--color-main);
  }

  @media screen and (min-width: 900px) {
    padding: 3.7rem;
  }
`;
