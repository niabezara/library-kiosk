import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyles";
import HomePage from "./routes/HomePage";
import CategoriesPage from "./routes/CategoriesPage";
import CategoryDetailPage from "./routes/CategoryDetailPage";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/category" element={<CategoryDetailPage />} />
      </Routes>
    </>
  );
}

export default App;
