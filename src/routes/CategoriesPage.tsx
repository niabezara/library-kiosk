import styled from "styled-components";
import Categories from "../components/Categories";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";

export default function CategoriesPage() {
  return (
    <Container>
      <PageHeader />
      <Categories />
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4.5rem;
`;
