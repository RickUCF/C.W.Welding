import React from "react";
import { Container, Row, Col } from "reactstrap";

/* Import core components */
import NavigationBar from "../components/NavigationBar.js";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";

/* Import images used */
import headerImage from "../assets/img/cerebro_8.jpg";

function ContactPage() {
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
        <Header image={headerImage} title={"Contact Us"} />
        <div className="section-team text-center">
          <Container>
            <Row>
              <Col>
                <a href="tel:414-758-6158">
                  <i style={{ marginTop: "30px" }} className="now-ui-icons tech_mobile"></i>
                  <h2 className="title" style={{ paddingTop: "15px" }}>
                    Phone
                  </h2>
                  <p className="category text-info">414-758-6158</p>
                </a>
              </Col>
              <Col>
                <a href="mailto:cwelding88@gmail.com">
                  <i style={{ marginTop: "30px" }} className="now-ui-icons ui-1_email-85"></i>
                  <h2 className="title" style={{ paddingTop: "15px" }}>
                    Email
                  </h2>
                  <p className="category text-info">cwelding88@gmail.com</p>
                </a>
              </Col>
              <Col>
                <a href="https://goo.gl/maps/BnuZCj2pHYhV2vch7" target="_blank" rel="noopener noreferrer">
                  <i style={{ marginTop: "30px" }} className="now-ui-icons location_pin"></i>
                  <h2 className="title" style={{ paddingTop: "15px" }}>
                    Address
                  </h2>
                  <p className="category text-info">3801 W. Mckinley Ave. Milwaukee, WI 53216</p>
                </a>
              </Col>
            </Row>
            <div className="separator separator-primary"></div>
            <iframe
              title="C.W. Welding Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1225.9226564063692!2d-87.96107815458952!3d43.046659109911715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2ad8a2ca090bc9bb!2sCerebros%20welding%20LLC!5e0!3m2!1sen!2sus!4v1621047144057!5m2!1sen!2sus"
              width="100%"
              height="450"
              loading="lazy"
              className="border border-dark"
              style={{ marginTop: "30px", marginBottom: "30px" }}
            ></iframe>
          </Container>
        </div>
        <div className="section-team text-center">
          <Container>
            <Row></Row>
          </Container>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default ContactPage;
