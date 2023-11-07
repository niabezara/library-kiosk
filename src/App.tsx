import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyles";
import HomePage from "./routes/HomePage";
import CategoriesPage from "./routes/CategoriesPage";
import CategoryDetailPage from "./routes/CategoryDetailPage";
import ToastNote from "./components/Toast";
import NavBar from "./components/NavBar";
import { useState } from "react";
import Theme from "./styles/Theme";
import { Helmet } from "react-helmet";
import FooterComponent from "./components/Footer";

function App() {
  const [theme, setTheme] = useState("dark");

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Theme theme={theme}>
        <GlobalStyle />
        <ToastNote />
        <NavBar toggleTheme={toggleTheme} theme={theme} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/category" element={<CategoryDetailPage />} />
        </Routes>
        <FooterComponent />
      </Theme>
    </>
  );
}

export default App;
