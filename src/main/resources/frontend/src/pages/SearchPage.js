import React, { useContext } from "react";
import FilterModal from "../components/FilterModal";
import { ResidenceContext } from "../contexts/ResidenceContextProvider";
import ResidenceCard from "../components/ResidenceCard";
import { Row } from "reactstrap";

const SearchPage = () => {
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
