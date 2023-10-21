import linkedin from "../assets/linkedin.svg";
import portfolio from "../assets/website.svg";
import blog from "../assets/blog.svg";
import github from "../assets/github.svg";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__icons">
        <a
          className="footer__link"
          href="https://www.linkedin.com/in/dominika-wojewska/"
        >
          <img className="footer__icon" src={linkedin}></img>
        </a>
        <a className="footer__link" href="https://mokosh.dev/">
          <img className="footer__icon" src={portfolio}></img>
        </a>
        <a className="footer__link" href="https://blog.mokosh.dev/">
          <img className="footer__icon" src={blog}></img>
        </a>
        <a className="footer__link" href="https://github.com/WitchDevelops">
          <img className="footer__icon" src={github}></img>
        </a>
      </div>
      <hr className="footer__line"></hr>
      <p className="footer__text">© 2023 Dominika Wojewska</p>
    </footer>
  );
};

export default Footer;
