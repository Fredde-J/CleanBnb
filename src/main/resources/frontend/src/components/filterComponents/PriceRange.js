import React, { useState, useContext, useEffect } from "react";
import { Row } from "reactstrap";
import { ResidenceContext } from "../../contexts/ResidenceContext";
import { FilteringContext } from "../../contexts/FilteringContext";

const PriceRange = () => {
  const [price, setPrice] = useState(0);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  const { residences } = useContext(ResidenceContext);
  const { updateFiltering } = useContext(FilteringContext);

  const onChangeHandler = e => {
    setPrice(e.target.value);
  };

  useEffect(() => {
    let priceArray = [];
    residences.forEach(residence => {
      priceArray.push(residence.price);
    });
    let minValue = Math.min(...priceArray);
    let maxValue = Math.max(...priceArray);
    setMin(minValue);
    setMax(maxValue);
    setPrice(minValue);
  }, [residences]);

  useEffect(() => {
    if (price) {
      updateFiltering({ price: parseInt(price) });
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
