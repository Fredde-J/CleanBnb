import React, { useContext, useState } from "react";
import ResidenceList from "../components/ResidenceList";
import { SearchResultContext } from "../contexts/SearchResultContext";
import SearchFilter from "../components/SearchFilter"
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";

const SearchPage = () => {
  const { searchResults } = useContext(SearchResultContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);


  return (
    <div className="container row">

      <Dropdown  className="warning my-3 col-12" isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle color="warning" caret>Sökfilter</DropdownToggle>
        <DropdownMenu>
            <SearchFilter/>
        </DropdownMenu>
      </Dropdown>

      {searchResults.map(result => (
        <ResidenceList key={result.id} result={result} />
      ))}

    </div>
  );
};

export default SearchPage;
