import React from "react";
import { Row, Col, Form } from "reactstrap";
import { Link } from "react-router-dom";

import { linkStyle } from "../css/footerStyle";

const Footer = () => {
  return (
    <div className="container-fluid bg-warning">
      <Row>
        <div className="col-6 text-center m-0">
          <Link style={linkStyle} className="" to="/info">
            Info
          </Link>
        </div>
        <div className="col-6 text-center m-0">
          <Link style={linkStyle} className="" to="/companyinfo">
            Om Oss
          </Link>
        </div>
      </Row>
    </div>
  );
};

export default Footer;
