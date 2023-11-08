import styled from "styled-components";
import Categories from "../components/Categories";
import PageHeader from "../components/PageHeader";

export default function CategoriesPage() {
  return (
    <Container>
      <PageHeader />
      <Categories />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.5rem;
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
  &::after {
    content: url("/assets/top-blob.svg");
    position: absolute;
    bottom: 0px;
    left: -30.4rem;
    overflow-x: hidden;
    z-index: -20;
  }

  &::before {
    content: url("/assets/top-blob.svg");
    position: absolute;
    top: 0;
    right: -40.4rem;
    overflow-x: hidden;
    z-index: -20;
  }
  @media screen and (min-width: 700px) {
    /* left: -19.6rem; */
  }
`;
