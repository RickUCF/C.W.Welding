import React from "react";
import { Container, Row, Col } from "reactstrap";

/* Import images used */
import headShot from "../assets/img/cerebro_about_4.jpg";
import cerebroAbout from "../assets/img/cerebro_about_3.jpg";
import cerebroAbout2 from "../assets/img/cerebro_about_5.jpg";
import headerImage from "../assets/img/cerebro_1.jpg";

/* Import core components */
import NavigationBar from "../components/NavigationBar.js";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";

function AboutPage() {
  /*
    Displays sidebar navigation when necesary 
  */
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);

  return (
    <>
      <NavigationBar />
      <div className="wrapper">
        <Header image={headerImage} title={"About Us"} />
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="10">
                <h2 className="title">Who are we?</h2>
                <p className="shadow-sm bg-white rounded description" style={{ marginBottom: "0px" }}>
                  We are a family-owned business whose roots are in the heart of Milwaukee. It all began when
                  Gabriel Vargas was inspired to open his own shop after countless years of welding
                  experience. He instinctively knew that Milwaukee, which is where his family and friends
                  reside would be the perfect place to open shop. Today we leverage a large warehouse for big
                  projects or make house calls for the smallest tasks. No job is too difficult or small, we
                  are here to fulfill all your welding needs. We aim to provide the very best welding in
                  Milwaukee.
                </p>
              </Col>
            </Row>
            <div className="separator separator-primary"></div>
          </Container>
        </div>
        <div className="section-team text-center">
          <Container>
            <h2 className="title">Gabriel Vargas</h2>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="7">
                <img alt="Gabriel Vargas" className="rounded-circle img-raised" src={headShot}></img>
                <p className="category text-info" style={{ paddingTop: "30px", paddingBottom: "20px" }}>
                  Lead Welder
                </p>
              </Col>
              <Col className="ml-auto mr-auto text-center" md="10">
                <p className="shadow-sm bg-white rounded description">
                  Gabriel Vargas’s pride and joy are his two kids. He enjoys taking his daughter and son
                  horseback riding and to horse racing events. When Gabriel is not with his kids, he enjoys
                  deer hunting and riding motorbikes up north. Most importantly he enjoys cooking out along
                  with a good tequila, family, and friends.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section-story-overview">
          <Container>
            <Row>
              <Col md="7">
                <div
                  className="image-container"
                  style={{ backgroundImage: `url(${cerebroAbout})`, backgroundSize: "cover" }}
                ></div>
                <h3>Gabriel Hunting</h3>
              </Col>
              <Col md="5">
                <div
                  className="image-container image-right"
                  style={{ backgroundImage: `url(${cerebroAbout2})`, backgroundSize: "cover" }}
                ></div>
              </Col>
            </Row>
          </Container>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default AboutPage;
