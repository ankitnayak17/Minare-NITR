import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo2 from '../assets/img/Minare logo.svg';

import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import { NavLink } from "react-router-dom";

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

  const [expanded, setExpanded] = useState(false);



      function Navstatetoggle(){
        setExpanded(!expanded)
      }

  // useEffect(()=>{
  //     function Navstatetoggle(){
  //       setExpanded(!expanded)
  //       console.log(expanded)
  //       console.log('tgl')
  //     }
  //   })
  
  function closeNav(){
    console.log('sel')
    setExpanded(false)
  }

  // function closeNav() {
  //   this.setState({ navExpanded: false });
  // };

  return (
      <Navbar onToggle={Navstatetoggle} expanded={expanded}
                 expand="md" className={`${scrolled ? "scrolled" : ""}  ${expanded? 'nav-expanded':'nav-collapsed'}`}>
        <Container>
          <Navbar.Brand href="#/">
            {/* <NavLink to={'/'}> */}
              <img src={logo2}  alt="Logo" />
            {/* </NavLink> */}
              
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink to={'/'} onClick={closeNav} className={'navbar-link nav-link'} activeClassName="active"><b>Home</b></NavLink>
              <NavLink to={'/team'} onClick={closeNav} className={'navbar-link nav-link'} activeClassName="active"><b>Teams</b></NavLink>
              <HashLink to={'/#events'} onClick={() => {onUpdateActiveLink('Event'); closeNav()}} className={'navbar-link nav-link'}><b>Events</b></HashLink>
              <NavLink to={'/sponsors'} onClick={closeNav} className={'nav-link navbar-link'} activeClassName="active"><b>Sponsors</b></NavLink>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/company/mining-engineering-society-nit-rourkela/" rel="noreferrer" target={"_blank"}><img src={navIcon1} alt="" /></a>
                <a href="https://www.facebook.com/minare.nitr/" rel="noreferrer" target={"_blank"}><img src={navIcon2} alt="" /></a>
                <a href="https://instagram.com/minare.nitr?igshid=YmMyMTA2M2Y=" rel="noreferrer" target={"_blank"}><img src={navIcon3} alt="" /></a>
              </div>
              <HashLink to='/#connect'>
                <button className="vvd" width="20px" height="20px">
                  <div>
                    <img className="imgButton" src="https://res.cloudinary.com/dlvmyc0x3/image/upload/v1678542770/question_qmytqc.png" height="20px" alt="" onClick={closeNav} />
                  </div>
                  </button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}
