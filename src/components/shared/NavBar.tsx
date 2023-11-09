import { BsSun, BsMoon } from "react-icons/bs";
import { Link } from "react-router-dom";
import bookshelfImage from "../../assets/bookshelf.png";
import { Container, Label, Logo, StyledNav } from "../../styles/NavBar";

const Nav = ({
  toggleTheme,
  theme,
}: {
  toggleTheme: () => void;
  theme: string;
}) => {
  return (
    <Container
      initial={{ y: -250 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 50 }}
    >
      <StyledNav initial="hidden" animate="show">
        <Link to="/" style={{ textDecoration: "none" }}>
          <Logo>
            <img src={bookshelfImage} alt="Bookshelf" />
            <h1>Library Kiosk</h1>
          </Logo>
        </Link>

        <Label className="label">
          {theme === "light" ? (
            <BsMoon className="light-icon" />
          ) : (
            <BsSun className="light-icon" />
          )}
          <input onClick={toggleTheme} />
        </Label>
      </StyledNav>
    </Container>
  );
};

export default Nav;
