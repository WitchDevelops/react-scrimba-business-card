import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./App.css";
const App = () => {
  return (
    <div className="app__wrapper">
      <div className="app__card">
      <Header />
      <Main />
      <Footer />
    </div>
    </div>
  );
};

export default App;
