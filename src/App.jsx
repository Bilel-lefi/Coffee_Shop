import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/home";
import Menu from "./components/menu";
import "./App.css";
function App() {
  return (
    <div className="w-full overflow-hidden">
      <Home path="/" />
      <Menu />
      <About />
      <Contact />
    </div>
  );
}

export default App;
