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
    <div className="container">
      <Dropdown className="warning" isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle color="warning" caret>Sökfilter</DropdownToggle>
        <DropdownMenu>
          
            <SearchFilter/>
          
        </DropdownMenu>
      </Dropdown>

      <h1 className="text-center">Search</h1>
      {searchResults.map(result => (
        <ResidenceList key={result.id} result={result} />
      ))}
    </div>
  );
};

export default SearchPage;
