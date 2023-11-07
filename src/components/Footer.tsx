import { Div, Container, StyledFooter } from "../styles/Footer";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <Div>
      <StyledFooter>
        <p>
          Built with React, Framer Motion and Styled Components. Coded in VS
          Code.
        </p>
        <a
          href="https://github.com/niabezara/new-portfolio"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub />
        </a>
      </StyledFooter>
    </Div>
  );
};

export default Footer;
