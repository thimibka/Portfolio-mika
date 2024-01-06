import "bootstrap/dist/css/bootstrap.min.css";
import "../src/styles/all.css";
import { Routes, Route } from "react-router-dom";
import Presentation from "./Pages/Presentation";
import Formation from "./Pages/Formation";
import Diplomes from "./Pages/Diplomes";
import Projets from "./Pages/Projets";
import NavPortFolio from "./Components/Navbar";

function App() {
  return (
    <>
      <NavPortFolio />
      <Routes>
        <Route path="/" element={<Presentation />} />
        <Route path="/Formation" element={<Formation />} />
        <Route path="/Diplomes" element={<Diplomes />} />
        <Route path="/Projets" element={<Projets />} />
      </Routes>
    </>
  );
}

export default App;
