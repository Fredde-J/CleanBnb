import React, { useContext, useState } from "react";
import ResidenceList from "../components/ResidenceList";
import FilterModal from "../components/FilterModal"
import {ResidenceContext} from '../contexts/ResidenceContextProvider'

const SearchPage = () => {
  const { residences } = useContext(ResidenceContext);


  return (
    <div className="container">

    <FilterModal />

      <h1 className="text-center">Search</h1>
        <ResidenceList key={residences.residence_id} residence={residences.residence} />
    </div>
  );
};

export default SearchPage;
