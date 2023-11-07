import { motion } from "framer-motion";
import styled from "styled-components";

export default function PageHeader() {
  return (
    <Head
      initial={{ y: -250 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.2, type: "spring", stiffness: 10 }}
      as={motion.div}
    >
      <h1>Explore collection</h1>
      <h2>There's something for everybody</h2>
    </Head>
  );
}

const Head = styled.div`
  background-color: white;
  padding: 3.2rem;
  text-align: center;
  width: 100%;
  color: blue;
  font-size: 15px;
  font-weight: 700;
  position: relative;
  letter-spacing: 2px;
  z-index: -10;
  text-transform: uppercase;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    left: 0;
    opacity: 1.5;
    height: 0.5px;
    background-color: #e3e3e3;
  }

  h1 {
    color: #6096b4;
  }
  h2 {
    color: #6096b4;
  }

  @media screen and (min-width: 900px) {
    padding: 6.7rem;
  }
`;
