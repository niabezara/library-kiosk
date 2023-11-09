import styled from "styled-components";
import { TbSelect } from "react-icons/tb";
export const SelectButton = () => {
  return (
    <>
      <StyledContainer>
        <StyledButton>
          <TbSelect />
          Select
        </StyledButton>
      </StyledContainer>
    </>
  );
};

const StyledContainer = styled.div`
  position: absolute;
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.771) 0%,
      rgba(0, 0, 0, 0.5) 100%
    ),
    url(<path-to-image>), #36363690 50% / cover no-repeat;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 9px;
  text-align: center;
  transition: all 500ms;
  transition: opacity 500ms;
  border-radius: 15px;
  opacity: 0;
  cursor: pointer;
  &:hover {
    opacity: 0.3;
  }
`;

const StyledButton = styled.button`
  border-radius: 28.5px;
  display: flex;
  align-items: center;
  text-align: center;
  padding: 1px;
  gap: 1rem;
  font-size: 1.8rem;
  background-color: #ffffff;
  opacity: 5;
  padding: 1.5rem 2rem;
  font-weight: 500;
  text-transform: capitalize;
  color: #000000;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.523);
  border: none;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;
