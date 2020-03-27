import React, { createContext, useState, useEffect } from "react";

export const ResidenceContext = createContext();

export default function ResidenceContextProvider(props) {
  const [residences, setResidences] = useState([]);

  const fetchResidences = async () => {
    let res = await fetch("/rest/residences");
    res = await res.json();
    console.log(res);
    setResidences(res);
  };

  useEffect(() => {
    fetchResidences();
  }, []);

  const values = {
    residences,
    setResidences
  };

  return (
    <ResidenceContext.Provider value={values}>
      {props.children}
    </ResidenceContext.Provider>
  );
}
