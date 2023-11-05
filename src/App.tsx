import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyles";
import HomePage from "./routes/HomePage";
import CategoriesPage from "./routes/CategoriesPage";
import SelectionPage from "./routes/SelectionPage";
import BorrowedPage from "./routes/BorrowedPage";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/category/:categoryId" element={<SelectionPage />} />
        <Route path="BorrowedPage" element={<BorrowedPage />} />
      </Routes>
    </>
  );
}

export default App;
