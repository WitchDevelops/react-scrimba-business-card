import Button from "./Button";
import Mailurl from "../assets/Mail-icon.svg";
import GHurl from "../assets/GitHub-logo.svg";
import "../components/Header.css";

const Header = () => {
  return (
    <header>
        <img className="header__image" src="src/assets/round.png"></img>
      <h1 className="header__text--main">Dominika Wojewska</h1>
      <h2 className="header__text--sub">Frontend Developer</h2>
      <a className="header__link" href="https://mokosh.dev/">
        mokosh.dev
      </a>
      <div className="header__buttons">
        <Button icon={GHurl} text="GitHub" link="https://github.com/WitchDevelops" />
        <Button icon={Mailurl} text="Mail" link="mailto:d.n.wojewska@gmail.com" />
      </div>
    </header>
  );
};

export default Header;
