import React, { createContext, useState } from "react";

export const FilteringContext = createContext();

const FilteringContextProvider = props => {
  const [filtering, setFiltering] = useState({});

  const updateFiltering = updates => {
    setFiltering({
      ...filtering,
      ...updates
    });
  };

  const resetFiltering = () => {
    setFiltering(null);
  }

  console.log(filtering);

  const values = {
    filtering,
    updateFiltering,
    resetFiltering
  };

  return (
    <FilteringContext.Provider value={values}>
      {props.children}
    </FilteringContext.Provider>
  );
};

export default FilteringContextProvider;
