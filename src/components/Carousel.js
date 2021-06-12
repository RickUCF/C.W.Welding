/*

=========================================================
* Now UI Kit React - v1.4.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-react
* Copyright 2020 Creative Tim (http://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-kit-react/blob/master/LICENSE.md)

* Designed by www.invisionapp.com Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React from "react";
import { Container, Row, Col, Carousel, CarouselItem, CarouselIndicators } from "reactstrap";

/* Import images */
import carousel_1 from "../assets/img/carousel_1.jpg";
import carousel_2 from "../assets/img/carousel_2.jpg";
import carousel_3 from "../assets/img/carousel_3.jpeg";
import carousel_4 from "../assets/img/carousel_4.jpeg";
import carousel_5 from "../assets/img/carousel_5.jpeg";
import carousel_6 from "../assets/img/carousel_6.jpeg";
import carousel_7 from "../assets/img/carousel_7.jpeg";
import carousel_8 from "../assets/img/carousel_8.jpeg";
import carousel_9 from "../assets/img/carousel_9.jpeg";

/* Carousel items and descriptions */
const items = [
  {
    src: carousel_1,
    altText: "Welded Gate",
    caption: "Welded Gate",
  },
  {
    src: carousel_2,
    altText: "Welded Gate",
    caption: "Welded Gate",
  },
  {
    src: carousel_3,
    altText: "Structural Welding",
    caption: "Structural Welding",
  },
  {
    src: carousel_4,
    altText: "Trailer",
    caption: "Trailer",
  },
  {
    src: carousel_5,
    altText: "Dump Truck",
    caption: "Dump Truck",
  },
  {
    src: carousel_6,
    altText: "Mining Equipment",
    caption: "Mining Equipment",
  },
  {
    src: carousel_7,
    altText: "Welded Custom Bench",
    caption: "Welded Custom Bench",
  },
  {
    src: carousel_8,
    altText: "Hot Rod",
    caption: "Hot Rod",
  },
  {
    src: carousel_9,
    altText: "Railing",
    caption: "Railing",
  },
];

function CarouselSection() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <>
      <div id="carousel">
        <Container>
          <Row className="justify-content-center">
            <Col>
              <Carousel activeIndex={activeIndex} next={next} previous={previous}>
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                {items.map((item) => {
                  return (
                    <CarouselItem onExiting={onExiting} onExited={onExited} key={item.src}>
                      <img src={item.src} alt={item.altText} style={{ maxHeight: "600px", width: "100%" }} />
                      <div className="carousel-caption d-md-block">
                        <h5>{item.caption}</h5>
                      </div>
                    </CarouselItem>
                  );
                })}
                <a
                  className="carousel-control-prev"
                  data-slide="prev"
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    previous();
                  }}
                  role="button"
                >
                  <i className="now-ui-icons arrows-1_minimal-left"></i>
                </a>
                <a
                  className="carousel-control-next"
                  data-slide="next"
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    next();
                  }}
                  role="button"
                >
                  <i className="now-ui-icons arrows-1_minimal-right"></i>
                </a>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default CarouselSection;
