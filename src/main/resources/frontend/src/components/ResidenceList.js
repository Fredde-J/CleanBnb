import React, { useContext } from "react";

import {ResidenceContext} from '../contexts/ResidenceContextProvider'


//Cards for residences
const ResidenceList = ({ result }) => {
  const {residences} = useContext(ResidenceContext)

  return residences.map((residence, i) => {
    return(
    <div key={residence.residenceId + i} style={{ borderRadius: "15px"}} className="Card bg-warning my-3">
      {<img src={residence.images} alt="" className="card-img-top p-3" /> }
       <div className="card-body row px-2">
          <h5 className="card-title col-6 text-left">
            {residence.address.streetName} {residence.address.streetNumber}
          </h5>
          <h5 className="card-text col-6 text-right">{residence.size}</h5>
          <p className="card-text col-12 mt-2">{residence.rooms}</p>
        </div>
      </div>
  )
}) 
};

export default ResidenceList;
