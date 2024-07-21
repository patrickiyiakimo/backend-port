import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <div>
        <Hero/>
      </div>
      <div>
        <About />
      </div>
      <div>
        <Skills /> 
      </div>
      <Projects />
    </div>
  );
}

export default App;
