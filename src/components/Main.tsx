import "./Main.css";
const Main = () => {
  return (
    <section className="main">
      <div className="main__wrapper">
        <h2 className="main__header">About</h2>
        <p className="main__text">
        I am a dedicated Frontend Developer known for crafting visually stunning and user-friendly web interfaces. With a background as a (bio)chemist for 12 years, I bring a strong foundation in rapid learning and problem-solving to create exceptional online experiences.
        </p>
      </div>
      <div className="main__wrapper">
        <h2 className="main__header">Skills</h2>
        <p className="main__text">
          HTML &#x2022; CSS &#x2022; JavaScript &#x2022; React &#x2022;
          TypeScript &#x2022; Bootstrap &#x2022; SASS &#x2022; PHP &#x2022; Twig
        </p>
      </div>
    </section>
  );
};

export default Main;
