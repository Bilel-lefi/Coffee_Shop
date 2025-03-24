import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Books from "./components/Books";
import Extras from "./components/Extras";
import backgroundImage from "./assets/home.jpg";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Navbar />
      <section id="home" className="pt-24">
        <Home />
      </section>

      <section id="about" className="pt-24">
        <About />
      </section>

      <section id="books" className="pt-24">
        <Books />
      </section>

      <section id="extras" className="pt-24">
        <Extras />
      </section>
    </div>
  );
}

export default App;
