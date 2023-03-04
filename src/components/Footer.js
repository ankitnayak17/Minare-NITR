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
          <Col size={8} sm={5}>
            <img src={Nitlogo} alt="Icon" />
            <img src={ph1} alt="Icon" />
            <img src={ph2} alt="Icon" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="contact-us">
              <div className="contact-us">
                <div>
                  <h2>CONTACT US</h2>
                </div>
                <div className="contact-detail">
                  <div className="contact-name">
                    <div id="name1"><h3>Deepak Anand</h3><span>9546637666</span></div>
                    <div id="name2"><h3>Binayak Sahu</h3><span>8018848713</span></div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
