import React from "react";
import { inputSize } from "../../css/checkBoxStyle";
import { Row, Col } from "reactstrap";

const CheckBoxes = () => {
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

  return (
    <Row className="p-3">
          {amenities.map((amenity, i) => (
            <div key={i} className="col-6 my-2">
              <input
                style={inputSize}
                className="col-3"
                type="checkbox"
                id={amenity}
                name={amenity}
                value={amenity}
              />
              <label className="col-9" htmlFor={amenity}>
                {amenity}
              </label>
            </div>
          ))}
    </Row>
  );
};

export default CheckBoxes;
