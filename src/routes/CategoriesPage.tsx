import Categories from "../components/category/Categories";
import PageHeader from "../components/shared/PageHeader";
import { Container } from "../styles/Categories";

export default function CategoriesPage() {
  return (
    <Container>
      <PageHeader />
      <Categories />
    </Container>
  );
}
