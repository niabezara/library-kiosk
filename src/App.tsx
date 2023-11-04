import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyles";
import HomePage from "./routes/HomePage";
import CategoriesPage from "./routes/CategoriesPage";
import { PaginationProvider } from "./context/PaginationContext";

function App() {
  return (
    <>
      <GlobalStyle />
      <PaginationProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/categories" element={<CategoriesPage />} />
        </Routes>
      </PaginationProvider>
    </>
  );
}

export default App;
