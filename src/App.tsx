import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyles";
import HomePage from "./routes/HomePage";
import CategoriesPage from "./routes/CategoriesPage";
import CategoryDetailPage from "./routes/CategoryDetailPage";
import ToastNote from "./components/Toast";

function App() {
  return (
    <>
      <GlobalStyle />
      <ToastNote />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/category" element={<CategoryDetailPage />} />
      </Routes>
    </>
  );
}

export default App;
