import React from "react";
import { Row } from "reactstrap";
import { Link } from "react-router-dom";

import { linkStyle, divStyle, spanStyle } from "../css/footerStyle";

const Footer = () => {
  return (
    <div style={divStyle} className="container-fluid bg-warning py-2">
      <Row>
        <span style={spanStyle} className="col-6 text-right">
          <Link style={linkStyle} className="" to="/info">
            Våra Avtal
          </Link>
        </span>
        <span style={spanStyle} className="col-6">
          <Link style={linkStyle} className="" to="/companyinfo">
            Om Oss
          </Link>
        </span>
      </Row>
    </div>
  );
};

export default Footer;
