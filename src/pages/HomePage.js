import React from "react";
import { Container, Row, Col } from "reactstrap";

/* Import images used */
import homeImage from "../assets/img/cerebro_4.jpg";
import homeImage2 from "../assets/img/cerebro_3.jpg";
import headerImage from "../assets/img/cerebro_2.jpg";

/* Import core components */
import NavigationBar from "../components/NavigationBar.js";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";

function HomePage() {
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
        <Header image={headerImage} title={"C.W. Welding"} />
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="9">
                <h2 className="title">Milwaukee's best Welding</h2>
                <p className="description">
                  We are here to service all your welding needs in Milwaukee county and surrounding areas. All
                  customers are welcomed, from individuals to businesses.
                </p>
              </Col>
            </Row>
            <div className="separator separator-primary"></div>
            <div className="section-story-overview">
              <Row>
                <Col md="6">
                  <div
                    className="image-container"
                    style={{ backgroundImage: `url(${homeImage})`, backgroundSize: "cover" }}
                  ></div>
                </Col>
                <Col md="5">
                  <h2 className="text-center">Services</h2>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">Steel Welding</li>
                    <li class="list-group-item">Stainless Steel Welding</li>
                    <li class="list-group-item">Aluminum Welding</li>
                    <li class="list-group-item">Casting</li>
                    <li class="list-group-item">Fabrication & Custom Work</li>
                  </ul>
                  <p className="text-center" style={{ paddingTop: "30px" }}>
                    We are a family-owned business which focuses on delivering the best service possible. Our
                    years of experience are noticed in the quality of our work. We are truly committed to
                    serving you with the upmost value, and honesty.
                  </p>
                </Col>
              </Row>
            </div>
            <div className="separator separator-primary"></div>
            <div className="section-story-overview">
              <Row>
                <Col md="5">
                  <h2 className="text-center">Past Works</h2>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">Smokers / Grills</li>
                    <li class="list-group-item">Fences</li>
                    <li class="list-group-item">Gates</li>
                    <li class="list-group-item">Awnings</li>
                    <li class="list-group-item">Hitches</li>
                    <li class="list-group-item">Vehicles</li>
                    <li class="list-group-item">Trailers</li>
                    <li class="list-group-item">Boats</li>
                    <li class="list-group-item">Snow Plows</li>
                    <li class="list-group-item">Mining Equipment</li>
                  </ul>
                </Col>
                <Col md="6">
                  <div
                    className="image-container"
                    style={{ backgroundImage: `url(${homeImage2})`, backgroundSize: "cover" }}
                  ></div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
