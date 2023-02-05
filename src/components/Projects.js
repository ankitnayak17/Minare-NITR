import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "WORKSHOPS",
      description: "Workshops that will help to enhance the technical knowledge of the participants but also allow them to showcase their innate abilities. These workshops will be chaperoned by invited guests",
      imgUrl: projImg1,
    },
    {
      title: "TECH PAP SHOW",
      description: "Just as the name suggests, this involves the presentation of technical papers by the participants to put their ideas forward and show the depth of their understanding and creativity. ",
      imgUrl: projImg2,
    },
    {
      title: "MINQUIRE",
      description: "Minquire aims to access the participants through two quizzes- one of which judges their general awareness and the other pertains to their technical erudite. It's an event that requires the participants to be of sound academic and social awareness. ",
      imgUrl: projImg3,
    },
    {
      title: "INDUSTRIAL IGNITE",
      description: "This event aims to gauge the technical and decision making skils of the particavipants by competing with innovative ideas and solutions. ",
      imgUrl: projImg1,
    },
    {
      title: "PLACE'MANTRA",
      description: "This event presents the participants with an exquisite platform to gauge their logical and technical skills in the form of campus placement-esque scenarios.",
      imgUrl: projImg2,
    },
    {
      title: "BID TO WIN 2.0",
      description: "The second season of this event will act as a counterfeit predicament to evaluate participants' monetary and logical skills.",
      imgUrl: projImg3,
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
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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
