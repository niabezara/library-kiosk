import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyles";
import HomePage from "./routes/HomePage";
import CategoriesPage from "./routes/CategoriesPage";
import CategoryDetail from "./routes/CategoryDetailPage";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/categoryDetail" element={<CategoryDetail />} />
        {/* <Route path="/Nia" element={<Nia />} /> */}
      </Routes>
    </>
  );
}

export default App;
