import React, { useState } from "react";

const PriceRange = () => {
  const [price, setPrice] = useState(0);

  const logPrice = e => {
    setPrice(e.target.value);
  };

  return (
    <div className="price-range-wrapper mb-4">
      <div className="price-range row">
        <p className="col-12 text-center m-0">Pris per Natt</p>
        <p className="col-12 text-center m-0 mb-2">{price}</p>
        <div className="row col-12">
          <p className="col-3 text-right m-0 mb-2">min</p>
          <input
            type="range"
            className="form-control-range col-6 p-0"
            id="prisRange"
            min="0"
            max="500"
            onChange={logPrice}
            value={price}
          />
          <p className="col-3 m-0">max</p>
        </div>
      </div>
    </div>
  );
};

export default PriceRange;
