import React from "react";
import { useState } from "react";
import { FilteringContext } from "../../contexts/FilteringContext";
import { inputSize } from "../../css/checkBoxStyle";
import { Row } from "reactstrap";
import { useContext } from "react";
import { useEffect } from "react";

const CheckBoxes = () => {
  const [amenity, setAmenity] = useState(null);
  const { updateFiltering } = useContext(FilteringContext);

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

  useEffect(() => {
                    if (amenity) {
                      updateFiltering({ amenity });
                    }
                    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            {a}
          </label>
        </div>
      ))}
    </Row>
  );
};

export default CheckBoxes;
