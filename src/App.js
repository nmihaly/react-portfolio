import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Resume from "./components/Resume";


 function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
    <Nav />
    <About />
    <Projects />
    <Resume />
    <Contact />
  </main>
  );
}

export default App;