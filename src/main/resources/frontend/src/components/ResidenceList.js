import React from "react";

const ResidenceList = ({ result }) => {

  return (
    <div style={{ borderRadius: "15px"}} className="Card bg-warning my-3 mx-4">
      <img src={result.image} alt="" className="card-img-top p-3" />
        <div className="card-body row px-2">
          <h5 className="card-title col-6 text-left">
            {result.streetName}
          </h5>
          <h5 className="card-text col-6 text-right">{result.pris}</h5>
          <p className="card-text col-12 mt-2">{result.text}</p>
        </div>
      </div>
  );
};

export default ResidenceList;
