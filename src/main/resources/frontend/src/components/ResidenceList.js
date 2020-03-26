import React, { useContext } from "react";

import {ResidenceContext} from '../contexts/ResidenceContextProvider'

const ResidenceList = ({ result }) => {
  const {residences} = useContext(ResidenceContext)

  return residences.map((residence, i) => {
    return(
    <div style={{ borderRadius: "15px"}} className="Card bg-warning my-3">
       <div className="card-body row px-2">
          <h5 className="card-title col-6 text-left">
            {residence.address}
          </h5>
          <h5 className="card-text col-6 text-right">{residence.size}</h5>
          <p className="card-text col-12 mt-2">{residence.rooms}</p>
        </div>
      </div>
  )
}) 
};

export default ResidenceList;
