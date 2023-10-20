import "./Button.css";

type ButtonProps = {
  icon?: string;
  text?: string;
  link: string;
};

const Button: React.FC<ButtonProps> = ({ icon, text, link }) => {
  return (
    <a href={link} className="button">
      {icon && <img className="button__icon" src={icon}></img>}
      {text && <span className="button__text">{text}</span>}
    </a>
  );
};

export default Button;
