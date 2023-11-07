import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyles";
import HomePage from "./routes/HomePage";
import CategoriesPage from "./routes/CategoriesPage";
import CategoryDetailPage from "./routes/CategoryDetailPage";
import ToastNote from "./components/Toast";
import NavBar from "./components/NavBar";
import { useEffect, useState } from "react";
import Theme from "./styles/Theme";

function App() {
  const [theme, setTheme] = useState("dark");
  const [Loading, setLoading] = useState(false);

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }
  useEffect(() => {
    document.title = "Library Kiosk";
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <Theme theme={theme}>
        <GlobalStyle />
        <ToastNote />
        <NavBar toggleTheme={toggleTheme} theme={theme} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/category" element={<CategoryDetailPage />} />
        </Routes>
      </Theme>
    </>
  );
}

export default App;
