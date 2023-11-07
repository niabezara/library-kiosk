import styled from "styled-components";
import { motion } from "framer-motion";

export const Div = styled(motion.div)`
  background: ${(props) => props.theme.secondBackground};
`;

export const Container = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1080px;
  margin: 2rem 2rem 3rem;
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 100;
  @media (min-width: 500px) {
    overflow-x: hidden;
  }
`;

export const Modal = styled.div`
  position: fixed;
  align-items: center;
  width: 100%;
  max-width: 40.5625rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  background-color: var(--color-header);
  padding: 3rem;
  border-radius: 8px;
  @media (min-width: 900px) {
    transform: translate(-50%, -50%);
  }
`;

export const InputSection = styled.section`
  width: 100%;
  height: 50px;
  position: relative;
  box-shadow: rgb(106 102 152 / 25%) 0px 10px 30px 0px;

  input {
    color: rgb(169, 167, 189);
    font-size: 15px;
    border: 1px solid rgb(169, 167, 189);
    border-radius: 5px;
    transition: all 0.25s ease-in-out 0s;
    width: 100%;
    height: 100%;
    background: transparent;
    padding-left: 50px;
    padding-right: 16px;
    outline: none;
  }

  div {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 50px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .InputIcon {
    color: rgb(169, 167, 189);
    font-size: 18px;
  }
`;

export const Button = styled.button`
  background-color: #610c9f;
  color: rgb(255, 255, 255);
  border: none;
  border-radius: 8px;
  padding: 1rem;
`;
