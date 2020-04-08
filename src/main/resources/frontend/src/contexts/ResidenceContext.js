import React, { createContext, useState, useEffect } from "react";
import {
  filterAmenities,
  filterPrices,
  filterBeds,
  filterCities,
} from "../components/FilterUtilities";

export const ResidenceContext = createContext();

export default function ResidenceContextProvider(props) {
  const [residences, setResidences] = useState([]);
  const [availabilities, setAvailabilities] = useState([]);
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
      wifi: false,
    },
  });

  const fetchResidences = async () => {
    if (localStorage.getItem("residences")) {
      setResidences(JSON.parse(localStorage.getItem("residences")));
      console.log("Fetched residences from Local Store");
    } else {
      let res = await fetch("/rest/residences");
      res = await res.json();
      localStorage.setItem("residences", JSON.stringify(res));
      setResidences(res);
      console.log("Fetched residences from database");
    }
  };

  const fetchAvailibilities = async () => {
    let res = await fetch("/rest/availability");
    res = await res.json();
    localStorage.setItem("availabilities", JSON.stringify(res));

    setAvailabilities(res);
    console.log("Fetched availabilities from database");
  };

  const updateResidences = () => {
    residences.forEach((r) => {
      let availability = availabilities.filter((a) => {
        return r.residenceId === a.residence.residenceId;
      });
      r.availability = availability[0];
    });

    console.log(residences);
  };

  const filterResidences = () => {
    let filteredRes = residences;
    filteredRes = filter.price
      ? filterPrices(filter.price, filteredRes)
      : filteredRes;
    filteredRes = filter.beds
      ? filterBeds(filter.beds, filteredRes)
      : filteredRes;
    filteredRes = filter.city
      ? filterCities(filter.city, filteredRes)
      : filteredRes;
    filteredRes = filter.amenity
      ? filterAmenities(filter.amenity, filteredRes)
      : filteredRes;
    setResidences(filteredRes);
  };

  const updateFilter = (updates) => {
    setFilter({
      ...filter,
      ...updates,
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
        Wifi: false,
      },
    });

  const values = {
    residences,
    setResidences,
    filterResidences,
    updateFilter,
    resetResidences,
    resetFilter,
  };

  useEffect(() => {
    fetchResidences();
    fetchAvailibilities();
  }, []);

  useEffect(() => {
    // updateResidences();
  }, [availabilities]);

  // useEffect(() => {
  //   console.log(filter);
  // }, [filter]);

  // useEffect(() => {
  //   console.log(residences);
  // }, [residences]);

  return (
    <ResidenceContext.Provider value={values}>
      {props.children}
    </ResidenceContext.Provider>
  );
}
