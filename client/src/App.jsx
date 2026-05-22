import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Team from "./pages/Team";
import Projects from "./pages/Projects";
import Gallery from "./pages/Gallery";
import Join from "./pages/Join";

export default function App() {

  return (

    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/about" element={<About />} />

      <Route path="/team" element={<Team />} />

      <Route path="/projects" element={<Projects />} />

      <Route path="/gallery" element={<Gallery />} />

      <Route path="/join" element={<Join />} />

    </Routes>

  );
}