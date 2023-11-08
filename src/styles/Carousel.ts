import styled from "styled-components";

export const CarouselWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  margin: 2rem;
  display: flex;
  justify-content: center;
`;
export const CarouselItems = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  /* width: 100%; */
  transition: transform 0.5s ease-in-out;
  @media (min-width: 700px) {
    width: 90%;
  }
  @media (min-width: 1024px) {
    width: 50%;
  }
`;

export const CarouselItem = styled.div`
  flex-shrink: 0;
  object-fit: cover;
  overflow: hidden;
  @media (min-width: 700px) {
    /* width: 50%; */
  }
  @media (min-width: 1024px) {
    /* width: 50%; */
  }
`;
