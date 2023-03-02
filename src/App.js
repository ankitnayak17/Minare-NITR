import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Router } from "react-router-dom";

import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import Team from './pages/teams';
import Body from './pages/body';
import Sponsors from './pages/sponsors';

// import { Hashroute }

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <Banner />
      <Skills />
      <Projects />
      <Contact /> */}
      {/* <Body /> */}
      
        <Routes>
          <Route path="/" element={<Body/>} />
          <Route path="/team" element={<Team/>} />
          <Route path="/sponsors" element={<Sponsors/>} />
        </Routes>
        {/* <Sponsors></Sponsors> */}
      <Footer />
    </div>
  );
}

export default App;
