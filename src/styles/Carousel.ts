import styled from "styled-components";

export const CarouselWrapper = styled.div`
  overflow: hidden;
  margin: 2rem;
  display: flex;
  justify-content: center;
`;
export const CarouselItems = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  transition: transform 0.5s ease-in-out;
  @media (min-width: 700px) {
    width: 86%;
  }
  @media (min-width: 1024px) {
    width: 70%;
  }
`;

export const CarouselItem = styled.div`
  flex-shrink: 0;
  object-fit: cover;
  @media (min-width: 700px) {
    /* width: 50%; */
  }
  @media (min-width: 1024px) {
    /* width: 50%; */
  }
`;
