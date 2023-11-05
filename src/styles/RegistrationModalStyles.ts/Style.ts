import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 100;
  @media (min-width: 500px) {
    overflow-x: hidden;
  }
`;

export const Div = styled.div`
  position: fixed;
  width: 100%;
  max-width: 40.5625rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;

  @media (min-width: 900px) {
    transform: translate(-50%, -50%);
  }
`;
