import React, { useEffect, useContext, useState } from "react";
import { ResidenceContext } from "../../contexts/ResidenceContextProvider";
import { Col } from "reactstrap";

const Beds = () => {
  const [bedsArray, setBedsArray] = useState([]);
  const { residences } = useContext(ResidenceContext);

  useEffect(() => {
    let tempArray = [];
    residences.forEach(residence => {
      tempArray.push(residence.beds);
    });
    tempArray.sort();
    tempArray = [...new Set(tempArray)];
    setBedsArray(tempArray);
  }, [residences]);

  const bedsStyle = {
    backgroundColor: "#ffc107",
    border: "none",
    borderRadius: "0.25rem",
    height: "38px"
  };

  return (
    <Col className="mx-auto mt-3">
      <label className="col-12 m-0 p-0 text-center" htmlFor="">
        Sovplatser
      </label>
      <select id="" style={bedsStyle} className="col-12">
        <option value="">Sängar..</option>
        {bedsArray.map((element, i) => (
          <option key={i} value={element}>
            {element}
          </option>
        ))}
      </select>
    </Col>
  );
};
export default Beds;
