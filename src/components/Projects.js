import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/workshop.jpg";
import projImg2 from "../assets/img/bid.jpg";
import projImg3 from "../assets/img/minquiz.jpg";
import projImg4 from "../assets/img/case.jpg";
import projImg5 from "../assets/img/placemantra1.jpg";
import projImg6 from "../assets/img/Techpap.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "WORKSHOP",
      description: "Workshops are to learning as what catalyst is to a reaction. Workshops of these kinds will ignite the spark to learn with mining industry experts and their guidance will boost the interest of particpants in the mines.",
      button: "Register here",
      imgUrl: projImg1,
    },
    {
      title: "Mine Your bid",
      description: "This season of this event will act as a counterfeit predicament to appraise participants' monetary and rational skills. ",
      button: "Register here",
      imgUrl: projImg2,
    },
    {
      title: "Min-O-Quiz",
      description: "This event  aims to  assess the contestants academic and general awareness with the help of two quizzes. One of which judges their general awareness and the other concerns to their technical enlightenment. ",
      button: "Register here",
      imgUrl: projImg3,
    },
    {
      title: "Case Ore-iented",
      description: " A speculative situation will be presented about the mining sector. It involves brain stroming analysis and identifying of issues involved and contemplating over the necessary and idiosyncratic solutions. ",
      button: "Register here",
      imgUrl: projImg4,
    },
    {
      title: "PLACE'MANTRA",
      description: "This event presents the participants with an exclusive platform to calibrate their logical and technical skills in the form of real time placement scenarios.",
      button: "Register here",
      imgUrl: projImg5,
    },
    {
      title: "TechExpo",
      description: "It involves the presentation of technical papers by respective Contenstant to put their notion forward and show the depth of their knowledge and creativity in mining.",
      button: "Register here",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="events">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Events a' Minare</h2>
                
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Day 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Day 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Day 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
