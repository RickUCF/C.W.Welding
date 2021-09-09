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
import { Container } from "reactstrap";

function Header(props) {
  return (
    <>
      <div className="page-header page-header-small">
        <div
          className="page-header-image"
          style={{ backgroundImage: `url(${props.image})`, backgroundSize: "cover" }}
        ></div>
        <div className="content-center">
          <Container>
            <h1 className="title">{props.title}</h1>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Header;
