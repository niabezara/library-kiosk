import { Route, Routes } from "react-router-dom";
import HomePage from "./routes/HomePage";
import CategoriesPage from "./routes/CategoriesPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<CategoriesPage />} />
      </Routes>
    </>
  );
}

export default App;
