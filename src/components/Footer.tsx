import { Footer, StyledFooter } from "../styles/Footer";
import { AiFillGithub } from "react-icons/ai";

const FooterComponent = () => {
  return (
    <Footer>
      <StyledFooter>
        <p>
          Built with React, Framer Motion and Styled Components. Coded in VS
          Code.
        </p>
        <a
          href="https://github.com/niabezara/library-kiosk"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub className="githubIcon" />
        </a>
      </StyledFooter>
    </Footer>
  );
};

export default FooterComponent;
