import React, { useState, useEffect, useContext } from "react";
import { Col } from "reactstrap";
import { ResidenceContext } from "../../contexts/ResidenceContext";

const Citys = () => {
  const [citiesArray, setCitiesArray] = useState([]);
  const [city, setCity] = useState(null);
  const { residences } = useContext(ResidenceContext);

  const cityStyle = {
    backgroundColor: "#ffc107",
    border: "none",
    borderRadius: "0.25rem",
    height: "38px"
  };

   const updateCity = e => {
     setCity(e.target.value);
   };

  useEffect(() => {
    let tempArray = [];
    residences.forEach(residence => {
      tempArray.push(residence.address.city);
    });
    tempArray.sort();
    tempArray = [...new Set(tempArray)];
    setCitiesArray(tempArray);
  }, [residences]);

  return (
    <Col className="mx-auto mt-3">
      <label className="col-12 m-0 p-0 text-center" htmlFor="">
        Stad
      </label>
      <select id="" style={cityStyle} className="col-12" onChange={updateCity}>
        <option value="">Välj stad..</option>
        {citiesArray.map((element, i) => (
          <option key={i} value={element}>
            {element}
          </option>
        ))}
      </select>
    </Col>
  );
};

export default Citys;
