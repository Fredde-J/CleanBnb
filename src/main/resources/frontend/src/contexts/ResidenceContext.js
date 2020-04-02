import React, { createContext, useState, useEffect } from "react";

export const ResidenceContext = createContext();

export default function ResidenceContextProvider(props) {
  const [residences, setResidences] = useState([]);

  const fetchResidences = async () => {
    let res = await fetch("/rest/residences");
    res = await res.json();
    setResidences(res);
    // console.log(res);
  };

  const filterResidences = (prop, value) => {
    switch (prop) {
      case "price":
        let filteredResidences = residences.filter(
          residence => residence.price <= value
        );
        console.log("Filtered Res;", filteredResidences);
        setResidences(filteredResidences);
        break;
    }
  };

  const resetResidences = () => {
    fetchResidences();
  };

  const values = {
    residences,
    setResidences,
    filterResidences,
    resetResidences
  };

  useEffect(() => {
    fetchResidences();
  }, []);

  return (
    <ResidenceContext.Provider value={values}>
      {props.children}
    </ResidenceContext.Provider>
  );
}
