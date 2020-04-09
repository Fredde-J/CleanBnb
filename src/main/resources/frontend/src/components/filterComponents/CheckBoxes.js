import React, { useState, useEffect, useContext } from "react";
import { Row } from "reactstrap";
import { ResidenceContext } from "../../contexts/ResidenceContext";
import { inputSize } from "../../css/checkBoxStyle";

const CheckBoxes = ({onAmenityUpdate}) => {
  const [amenity, setAmenity] = useState(null);
  const { updateFilter } = useContext(ResidenceContext);
  const amenities = [
    "balkong",
    "badkar",
    "diskmaskin",
    "frys",
    "kyl",
    "tv",
    "tvättmaskin",
    "wifi"
  ];

  const handleClick = e => {
    if (e.target.checked) {
      setAmenity({
        ...amenity,
        [e.target.value]: true
      });
      onAmenityUpdate({[e.target.value]: true})
    } else {
      setAmenity({
        ...amenity,
        [e.target.value]: false
      });
      onAmenityUpdate({[e.target.value]: false})
    }
  };

  useEffect(() => {
    if (amenity) {
      //updateFilter({ amenity });
      
    }
    // eslint-disable-next-line
  }, [amenity]);
  
  return (
    <Row className="p-3">
      {amenities.map((a, i) => (
        <div key={i} className="col-6 my-2">
          <input
            style={inputSize}
            className="checkbox col-3"
            type="checkbox"
            id={a}
            name={a}
            value={a}
            onClick={handleClick}
          />
          <label className="col-9" htmlFor={a}>
            {a.charAt(0).toUpperCase() + a.slice(1)}
          </label>
        </div>
      ))}
    </Row>
  );
};

export default CheckBoxes;
