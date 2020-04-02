import React from "react";
import { useState } from "react";
import { inputSize } from "../../css/checkBoxStyle";
import { Row } from "reactstrap";

const CheckBoxes = () => {
  const [amenity, setAmenity] = useState(null);

  const amenities = [
    "Balkong",
    "Badkar",
    "Diskmaskin",
    "Frys",
    "Kyl",
    "TV",
    "Tvättmaskin",
    "Wifi"
  ];

  const handleClick = e => {
    if (e.target.checked) {
      setAmenity({
        ...amenity,
        [e.target.value]: true
      });
    } else {
       setAmenity({
         ...amenity,
         [e.target.value]: false
       });
    }
  };

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
            {a}
          </label>
        </div>
      ))}
    </Row>
  );
};

export default CheckBoxes;
