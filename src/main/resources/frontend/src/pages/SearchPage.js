import React, { useEffect, useContext } from "react";
import { Row, Col } from "reactstrap";

import FilterModal from "../components/FilterModal";
import ResidenceCard from "../components/ResidenceCard";
import { ResidenceContext } from "../contexts/ResidenceContext";
import { buttonStyle } from "../css/searchPageStyle";

const SearchPage = (props) => {
  const { residences, resetResidences } = useContext(ResidenceContext);

  // const updateResidences = () => {
  //   residences.forEach((r) => {
  //     let availability = availabilities.filter((a) => {
  //       return r.residenceId === a.residence.residenceId;
  //     });
  //     r.availability = availability[0];
  //     // console.log(r);
  //   });

  //   console.log(residences);
  // };

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
      {residences.map((residence) => (
        <ResidenceCard key={residence.residenceId} residence={residence} />
      ))}
    </Row>
  );
};

export default SearchPage;
