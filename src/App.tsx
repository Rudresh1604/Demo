import NavbarComponent from "./components/Navbar";
import "./App.css";
import IntroSection from "./IntroSection";
import ServicesComponent from "./CustomComponents/ServicesComponent";

function App() {
  return (
    <div>
      <NavbarComponent />
      <IntroSection />
      <ServicesComponent />
    </div>
  );
}

export default App;
