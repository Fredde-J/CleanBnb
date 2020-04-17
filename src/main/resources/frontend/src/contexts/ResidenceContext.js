import React, { createContext, useState, useEffect } from "react";
import {
  filterAmenities,
  filterPrices,
  filterBeds,
  filterCities,
  filterDate,
} from "../components/FilterUtilities";

export const ResidenceContext = createContext();

export default function ResidenceContextProvider(props) {
  const [availabilities, setAvailabilities] = useState([]);
  const [chosenResidence, setChosenResidence] = useState(null);
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

  const fetchAvailibilities = async () => {
    if (localStorage.getItem("availabilities")) {
      setAvailabilities(JSON.parse(localStorage.getItem("availabilities")));
      // console.log("Fetched availabilities from Local Store");
    } else {
      let res = await fetch("/rest/availability");
      res = await res.json();
      localStorage.setItem("availabilities", JSON.stringify(res));
      setAvailabilities(res);
      // console.log("Fetched availabilities from database");
    }
  };

  const filterResidences = () => {
    let filteredRes = availabilities;
    filteredRes = filter.price
      ? filterPrices(filter.price, filteredRes)
      : filteredRes;
    filteredRes =
      filter.checkInDate || filter.checkOutDate
        ? filterDate(filter.checkInDate, filter.checkOutDate, filteredRes)
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
    setAvailabilities(filteredRes);
  };

  const updateFilter = (updates) => {
    setFilter({
      ...filter,
      ...updates,
    });
  };

  const resetResidences = () => {
    setAvailabilities(JSON.parse(localStorage.getItem("availabilities")));
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
    availabilities,
    setAvailabilities,
    filterResidences,
    updateFilter,
    resetResidences,
    resetFilter,
    setChosenResidence,
    chosenResidence,
    fetchAvailibilities,
  };

  useEffect(() => {
    fetchAvailibilities();
  }, []);

  return (
    <ResidenceContext.Provider value={values}>
      {props.children}
    </ResidenceContext.Provider>
  );
}
