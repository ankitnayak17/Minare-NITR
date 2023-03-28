import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/MININGLOGO.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';

import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Annual Geo-Mining Fest"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome everyone, the 9th iteration of the Major Geo-Mining fest, MINARE'23, is here.</span>

                  <p> "Minare is the biggest geo-mining fest of Eastern India, which has proven to provide budding engineers develop their thinking capability towards the field of mining, the challenges it offers and how to overcome them."</p>

                  {/* <div style={{ 'display': 'flex', 'justifycontent': 'space-between' }}> */}
                    {/* <a href="https://drive.google.com/file/d/18EWzE13DXQ5mF_BBlJvc2aLprijNHl5O/view?usp=drivesdk" target="_blank" rel="noreferrer"> */}
                      {/* <button>Learn More<ArrowRightCircle size={25} /></button></a> */}
                    <div style={{ 'display': 'flex', 'justify-content': 'space-between' }}>
                      <a style={{ 'textDecoration': 'none' }} href="https://drive.google.com/file/d/18EWzE13DXQ5mF_BBlJvc2aLprijNHl5O/view?usp=drivesdk" target="_blank" rel="noreferrer">
                        <button>Event Brochure<ArrowRightCircle size={25} /></button>
                      </a>
                      <a style={{ 'textDecoration': 'none' }} href="https://drive.google.com/file/d/18EWzE13DXQ5mF_BBlJvc2aLprijNHl5O/view?usp=drivesdk" target="_blank" rel="noreferrer">
                        <button>Sponsors Brochure<ArrowRightCircle size={25} /></button>
                      </a>
                    </div>
                  {/* </div> */}
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className="btn">
                  <button role="button" class="button-name">Register Here</button>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
