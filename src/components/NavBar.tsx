import styled from "styled-components";
import { BsSun, BsMoon } from "react-icons/bs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Nav = ({ toggleTheme, theme }: any) => {
  return (
    <Container
      initial={{ y: -250 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 50 }}
    >
      <StyledNav initial="hidden" animate="show">
        <Link to="/" style={{ textDecoration: "none" }}>
          <Logo>
            <img src="/assets/bookshelf.png" alt="" />
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
const Container = styled(motion.header)`
  z-index: 1;
  left: 0;
  right: 0;
  background: linear-gradient(
    to bottom,
    var(--color-bg) 0%,
    rgba(0, 0, 0, 0) 100%
  );
`;

const StyledNav = styled(motion.nav)`
  align-items: center;
  max-width: 1080px;
  margin: auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
`;

const Label = styled.label`
  cursor: pointer;
  input {
    opacity: 0;
    margin: 0;
    padding: 0;
    width: 0;
  }
  .light-icon {
    width: 1.5rem;
    height: 1.5rem;
    color: var(--color-main);
  }
`;

const Logo = styled(motion.div)`
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 2rem;
  img {
    font-size: 1.2rem;
    font-weight: lighter;
    width: 3rem;
    height: 3rem;
  }
  h1 {
    color: var(--color-main);
  }
`;

export default Nav;
