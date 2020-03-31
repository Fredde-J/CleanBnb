import React from "react";
import { Col } from "reactstrap";
import {
  divStyle1,
  imgStyle,
  topPStyle,
  bottomPStyle
} from "../css/ResidenceCardStyle";
import { withRouter } from "react-router-dom";

const ResidenceCard = ({ residence, history }) => {
  const goToResidencePage = id => {
    history.push(`/residences/${id}`);
  };

  return (
    <Col xs="12" md="6">
      <div
        style={divStyle1}
        className="card my-3 p-3"
        onClick={() => goToResidencePage(residence.residenceId)}
      >
        <img
          style={imgStyle}
          src={residence.images}
          alt=""
          className="card-img-top"
        />
        <div className="card-body row">
          <p style={topPStyle} className="col-6 text-left">
            {residence.address.city}
          </p>
          <p style={topPStyle} className="col-6 text-right">
            {residence.price}kr / Natt
          </p>
          <p style={bottomPStyle} className="col-6">
            {residence.beds} {residence.beds > 1 ? "st sängar" : "st säng"}
          </p>
          <p style={bottomPStyle} className="col-6 text-right">
            (datum)
          </p>
        </div>
      </div>
    </Col>
  );
};

export default withRouter(ResidenceCard);
