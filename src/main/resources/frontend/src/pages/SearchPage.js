import React, { useContext } from "react";
import { Row } from "reactstrap";

import FilterModal from "../components/FilterModal";
import ResidenceCard from "../components/ResidenceCard";
import { ResidenceContext } from "../contexts/ResidenceContextProvider";

const SearchPage = props => {
  const { residences } = useContext(ResidenceContext);

  return (
      <Row>
        <FilterModal />
        {residences.map(residence => (
          <ResidenceCard key={residence.residenceId} residence={residence} />
        ))}
      </Row>
  );
};

export default SearchPage;
