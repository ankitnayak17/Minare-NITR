import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
// import Nitlogo from '../assets/img/nit logo.svg';
// import logo from '../assets/img/MES logo.svg';
// import logo2 from '../assets/img/Minare logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import { Link, NavLink} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            {/* <img src={logo} alt="Logo" />
            <img src={logo2}  alt="Logo" /> */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {/* <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link> */}
              {/* <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link> */}
              <NavLink to={'/'} className={'navbar-link nav-link'} activeClassName="active">Home</NavLink>
              <NavLink to={'/team'} className={'navbar-link nav-link'} activeClassName="active">Teams</NavLink>
              {/* <NavLink to={'/#skills'} className={'navbar-link nav-link'} activeClassName="active">skills</NavLink> */}
              <HashLink to={'/#events'} onClick={() => onUpdateActiveLink('Event')} className={'navbar-link nav-link'}>Events</HashLink>
              <NavLink to={'/Sponserships'} className={'nav-link navbar-link'} activeClassName="active">Sponsers</NavLink>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/company/mining-engineering-society-nit-rourkela/" rel="noreferrer" target={"_blank"}><img src={navIcon1} alt="" /></a>
                <a href="https://www.facebook.com/minare.nitr/" rel="noreferrer" target={"_blank"}><img src={navIcon2} alt="" /></a>
                <a href="https://instagram.com/minare.nitr?igshid=YmMyMTA2M2Y=" rel="noreferrer" target={"_blank"}><img src={navIcon3} alt="" /></a>
              </div>
              <HashLink to='/#connect'>
                <button className="vvd"><span>Let's Connect</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}
