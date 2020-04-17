import React, { useState, useContext, useEffect } from "react";
import { Row } from "reactstrap";
import { ResidenceContext } from "../../contexts/ResidenceContext";

const PriceRange = () => {
  const [price, setPrice] = useState(0);
  const [min, setMin] = useState(null);
  const [max, setMax] = useState(null);
  const { availabilities, updateFilter } = useContext(ResidenceContext);

  const onChangeHandler = e => {
    // resetResidences();
    setPrice(e.target.value);
  };

  useEffect(() => {
    let priceArray = [];
    availabilities.forEach((listing) => {
      priceArray.push(listing.residence.price);
    });
    let minValue = Math.min(...priceArray);
    let maxValue = Math.max(...priceArray);
    setMin(minValue);
    setMax(maxValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (price) {
      updateFilter({ price: parseInt(price) });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [price]);

  return (
    <div className="price-range-wrapper mb-4">
      <div className="price-range">
        <p className="col-12 text-center m-0">Pris per Natt</p>
        <p className="col-12 text-center m-0 mb-2">{price} kr</p>
        <Row>
          <p className="col-3 text-right m-0 mb-2">{min}</p>
          <input
            type="range"
            className="form-control-range col-6 p-0"
            id="prisRange"
            min={min}
            max={max}
            onChange={onChangeHandler}
            value={price}
          />
          <p className="col-3 m-0">{max}</p>
        </Row>
      </div>
    </div>
  );
};

export default PriceRange;
