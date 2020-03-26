import React, { useContext, useState } from "react";
import ResidenceList from "../components/ResidenceList";
import {ResidenceContext} from '../contexts/ResidenceContextProvider'
import SearchFilter from "../components/SearchFilter"
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";

const SearchPage = () => {
  const { residences } = useContext(ResidenceContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <div className="container">
      <Dropdown className="warning" isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle color="warning" caret>Sökfilter</DropdownToggle>
        <DropdownMenu>
          
            <SearchFilter/>
          
        </DropdownMenu>
      </Dropdown>

      <h1 className="text-center">Search</h1>
      {residences.map(residence => (
        <ResidenceList key={residence.residence_id} residence={residence} />
      ))}
    </div>
  );
};

export default SearchPage;
