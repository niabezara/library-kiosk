import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyles";
import HomePage from "./routes/HomePage";
import CategoriesPage from "./routes/CategoriesPage";
import CategoryDetailPage from "./routes/CategoryDetailPage";
import ToastNote from "./components/Toast";
import NavBar from "./components/NavBar";
import { useEffect, useState } from "react";
import Theme from "./styles/Theme";
import { Helmet } from "react-helmet";
import FooterComponent from "./components/Footer";
import animationdata from "./assets/Animation.json";
import Lottie from "lottie-react";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  const style = {
    height: 800,
  };
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

        {isLoading ? (
          <Lottie animationData={animationdata} style={style} />
        ) : (
          <>
            <ToastNote />
            <NavBar toggleTheme={toggleTheme} theme={theme} />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/categories" element={<CategoriesPage />} />
              <Route path="/category" element={<CategoryDetailPage />} />
            </Routes>
            <FooterComponent />
          </>
        )}
      </Theme>
    </>
  );
}

export default App;
