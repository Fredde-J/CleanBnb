import React, { createContext, useState, useEffect } from "react";
import { filterAmenities } from "../components/FilterUtilities";

export const ResidenceContext = createContext();

export default function ResidenceContextProvider(props) {
  const [residences, setResidences] = useState([]);
  const [filter, setFilter] = useState({
    price: null,
    checkInDate: null,
    checkOutDate: null,
    beds: null,
    city: null,
    amenity: {
      balkong: false,
      badkar: false,
      diskmaskin: false,
      frys: false,
      kyl: false,
      tv: false,
      tvättmaskin: false,
      wifi: false
    }
  });

  const fetchResidences = async () => {
    if (localStorage.getItem("residences")) {
      setResidences(JSON.parse(localStorage.getItem("residences")));
      console.log("Fetched from Local Store");
    } else {
      let res = await fetch("/rest/residences");
      res = await res.json();
      localStorage.setItem("residences", JSON.stringify(res));
      setResidences(res);
      console.log("Fetched from database");
    }
  };

  const filterResidences = () => {
    let filteredRes;
    if (filter.price) {
      filteredRes = residences.filter(r => r.price <= filter.price);
    }
    if (filter.beds) {
      if (filteredRes) {
        filteredRes = filteredRes.filter(r => r.beds === filter.beds);
      } else {
        filteredRes = residences.filter(r => r.beds === filter.beds);
      }
    }
    if (filter.city) {
      if (filteredRes) {
        filteredRes = filteredRes.filter(r => r.address.city === filter.city);
      } else {
        filteredRes = residences.filter(r => r.address.city === filter.city);
      }
    }
    filteredRes = filterAmenities(filter.amenity, residences, filteredRes);

    // if (filter.amenity.balkong) {
    //   filteredRes = filteredRes
    //     ? filteredRes.filter(r => r.amenity.balkong)
    //     : residences.filter(r => r.amenity.balkong);
    // }

    filteredRes ? setResidences(filteredRes) : setResidences(residences); // If no choices is put in the search filters, then residences are sent back.
  };

  const updateFilter = updates => {
    setFilter({
      ...filter,
      ...updates
    });
  };

  const resetResidences = () => {
    setResidences(JSON.parse(localStorage.getItem("residences")));
  };

  const resetFilter = () =>
    setFilter({
      price: null,
      checkInDate: null,
      checkOutDate: null,
      beds: null,
      city: null,
      amenity: {
        Balkong: false,
        Badkar: false,
        Diskmaskin: false,
        Frys: false,
        Kyl: false,
        TV: false,
        Tvättmaskin: false,
        Wifi: false
      }
    });

  const values = {
    residences,
    setResidences,
    filterResidences,
    updateFilter,
    resetResidences,
    resetFilter
  };

  useEffect(() => {
    fetchResidences();
  }, []);

  useEffect(() => {
    console.log(filter);
  }, [filter]);

  useEffect(() => {
    console.log(residences);
  }, [residences]);

  return (
    <ResidenceContext.Provider value={values}>
      {props.children}
    </ResidenceContext.Provider>
  );
}
