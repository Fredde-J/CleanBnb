import React, { useContext } from "react";
import { Col,Button } from "reactstrap";
import { ResidenceContext } from "../contexts/ResidenceContext";
import {
  divStyle1,
  imgStyle,
  topPStyle,
  bottomPStyle,
} from "../css/ResidenceCardStyle";


const LeaseConfirmPage = (props) => {
  const {setAvailabilities} = useContext(ResidenceContext)
  let leaseObject;
  leaseObject=JSON.parse(localStorage.getItem("newLeaseObject"))

  const backToStartPage = ()=>{
    localStorage.clear();
    setAvailabilities(null)
    props.history.push("/")
    
  }
  return (
    <div>
      <h2 style={{borderRadius: "15px"}} className="text-center mt-3 bg-warning col-12 col-md-6 offset-md-3 p-2">Din Listning!</h2>
      <Col xs="12" md={{size: 8, offset:2}}>
        <div
          style={divStyle1}
          className="card my-3 p-3"
        >
          <img
            style={imgStyle}
            src={leaseObject.residence.images}
            alt=""
            className="card-img-top"
          />
          <div className="card-body row">
            <p style={topPStyle} className="col-6 text-left">
              {leaseObject.residence.address
                ? leaseObject.residence.address.city
                : "Address"}
            </p>
            <p style={topPStyle} className="col-6 text-right">
              {leaseObject.residence.price}kr / Natt
            </p>
            <p style={bottomPStyle} className="col-4">
              {leaseObject.residence.beds}{" "}
              {leaseObject.residence.beds > 1 ? "st sängar" : "st säng"}
            </p>
            <p style={bottomPStyle} className="col-8 text-right">
              {leaseObject.startDate} - {leaseObject.endDate}
            </p>
          </div>
        </div>
        <Button style={{fontSize: "1.5em", borderRadius: "15px"}} color="warning" className="col-12 col-md-8 offset-md-2 mb-4 mt-2" onClick={backToStartPage}>
          Startsida
        </Button>
      </Col>
    </div>
  );
}
 
export default LeaseConfirmPage;