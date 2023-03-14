import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import Team from './pages/teams';
import Body from './pages/body';
import Sponsors from './pages/sponsors';
import { useState } from 'react';
import { useEffect } from 'react';

// import { Hashroute }

function App() {
  const [loading,setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [])
  

  return (
    <div className="App">
      {
        loading ?
        <>
        <div>
        <svg viewBox="0 0 600 300" className="minareLoading">
          <symbol id="s-text">
            <text text-anchor="middle" x="50%" y="50%" dy=".35em" scale={1000}>MINARE</text>
          </symbol>
          <use className="text" href="#s-text"></use>
          <use className="text" href="#s-text"></use>
          <use className="text" href="#s-text"></use>
          <use className="text" href="#s-text"></use>
          <use className="text" href="#s-text"></use>
        </svg>
        </div>
        </>
          :
        <>
        <NavBar />
        <Routes>
          <Route path="/" element={<Body/>} />
          <Route path="/team" element={<Team/>} />
          <Route path="/sponsors" element={<Sponsors/>} />
        </Routes>
        <Footer />
        </>

      }
      
    </div>
  );
}


export default App;
