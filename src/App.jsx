import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact"

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
        <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
        {/* bg */}
        </div>
        
        <div className="container mx-auto px-8">
          <Navbar />
          <Hero/>
          <About/>
          <Technologies/>
          <Projects/>
          <Contact/>
        </div>
      </div>
    </>
  );
}

export default App;