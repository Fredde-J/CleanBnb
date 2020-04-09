import React from "react";
import { Col } from "reactstrap";
import {
  divStyle1,
  imgStyle,
  topPStyle,
  bottomPStyle,
} from "../css/ResidenceCardStyle";
import { withRouter } from "react-router-dom";

const ResidenceCard = ({ listing, history }) => {
  const goToResidencePage = (id) => {
    history.push(`/residences/${id}`);
  };

  return (
    <Col xs="12" md="6">
      <div
        style={divStyle1}
        className="card my-3 p-3"
        onClick={() => goToResidencePage(listing.residence.residenceId)}
      >
        <img
          style={imgStyle}
          src={listing.residence.images}
          alt=""
          className="card-img-top"
        />
        <div className="card-body row">
          <p style={topPStyle} className="col-6 text-left">
            {listing.residence.address ? listing.residence.address.city : "Address"}
          </p>
          <p style={topPStyle} className="col-6 text-right">
            {listing.residence.price}kr / Natt
          </p>
          <p style={bottomPStyle} className="col-4">
            {listing.residence.beds} {listing.residence.beds > 1 ? "st sängar" : "st säng"}
          </p>
          <p style={bottomPStyle} className="col-8 text-right">
            {listing.startDate} - {listing.endDate}
          </p>
        </div>
      </div>
    </Col>
  );
};

export default withRouter(ResidenceCard);
