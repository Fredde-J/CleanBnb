import React, { useContext } from "react";
import { Row, Col } from "reactstrap";

import FilterModal from "../components/FilterModal";
import ResidenceCard from "../components/ResidenceCard";
import { ResidenceContext } from "../contexts/ResidenceContext";
import { buttonStyle } from "../css/searchPageStyle";

const SearchPage = () => {
  const { availabilities, resetResidences } = useContext(ResidenceContext);

  return (
    <Row>
      <FilterModal />
      <Col xs="12" md={{ size: 8, offset: 2 }}>
        <button
          style={buttonStyle}
          className="col-12 btn btn-warning"
          onClick={resetResidences}
        >
          Rensa Filter
        </button>
      </Col>
      {availabilities.map((availability) => (
        <ResidenceCard
          key={availability.residence.residenceId}
          listing={availability}
        />
      ))}
    </Row>
  );
};

export default SearchPage;
