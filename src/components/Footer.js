import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import Nitlogo from '../assets/img/nit logo.svg';
import ph1 from '../assets/img/MES logo.svg';
import ph2 from '../assets/img/Minare logo.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <img src={Nitlogo} alt="Icon" />
            <img src={ph1} alt="Icon" />
            <img src={ph2} alt="Icon" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/company/mining-engineering-society-nit-rourkela/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/minare.nitr/"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://instagram.com/minare.nitr?igshid=YmMyMTA2M2Y="><img src={navIcon3} alt="Icon" /></a>
            </div>
            
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
