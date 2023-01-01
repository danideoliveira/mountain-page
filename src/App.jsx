import "./App.css";
import About from "./components/About/About";
import AboutSecondary from "./components/AboutSecondary/AboutSecondary";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <Home />
      <About />
      <AboutSecondary />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
