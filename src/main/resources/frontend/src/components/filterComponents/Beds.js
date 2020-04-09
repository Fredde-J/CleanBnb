import React, { useEffect, useContext, useState } from "react";
import { ResidenceContext } from "../../contexts/ResidenceContext";
import { Col } from "reactstrap";

const Beds = () => {
  const [bedsArray, setBedsArray] = useState([]);
  const [beds, setBeds] = useState(null);
  const { availabilities, updateFilter } = useContext(ResidenceContext);

  const bedsStyle = {
    backgroundColor: "#ffc107",
    border: "none",
    borderRadius: "0.25rem",
    height: "38px"
  };

  const updateBeds = e => {
    setBeds(e.target.value);
  };

  useEffect(() => {
    let tempArray = [];
    availabilities.forEach((listing) => {
      tempArray.push(listing.residence.beds);
    });
    tempArray.sort();
    tempArray = [...new Set(tempArray)];
    setBedsArray(tempArray);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (beds) {
      updateFilter({ beds: parseInt(beds) });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [beds]);

  return (
    <Col className="mx-auto mt-3">
      <label className="col-12 m-0 p-0 text-center" htmlFor="">
        Sovplatser
      </label>
      <select id="" style={bedsStyle} className="col-12" onChange={updateBeds}>
        <option value="null">Sängar..</option>
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
