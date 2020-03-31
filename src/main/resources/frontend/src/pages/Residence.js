import React, { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";

import {
  imgStyle,
  divStyle,
  pTagStyle1,
  pTagStyle2,
  pTagStyle3,
  pTagStyle4
} from "../css/ResidenceCardStyle";

const Residence = props => {
  const [residence, setResidence] = useState(null);

  const fetchOneResidence = async id => {
    let res = await fetch(`/rest/residences/${id}`);
    res = await res.json();
    console.log(res);
    setResidence(res);
  };

  useEffect(() => {
    fetchOneResidence(props.match.params.residenceId);
  }, [props.match.params.residenceId]);

  let amenityArray = [];

  if (residence) {
    Object.entries(residence.amenity).forEach((arrayItem, i) => {
      if (i !== 0) {
        if (arrayItem[1]) {
          amenityArray.push(
            arrayItem[0].charAt(0).toUpperCase() + arrayItem[0].slice(1)
          );
        }
      }
    });
  }

  return (
    <>
      {residence ? (
        <Row>
          <Col xs="12" md={{ size: 8, offset: 2 }}>
            <div style={divStyle} className="card my-3 p-3 bg-warning">
              <img
                style={imgStyle}
                className="card-img-top"
                src={residence.images}
                alt=""
              ></img>
              <div className="card-body row">
                <p style={pTagStyle1} className="col-6">
                  {residence.address.city}
                </p>
                <p style={pTagStyle1} className="text-right col-6">
                  {residence.price} / natt
                </p>
                <p style={pTagStyle4} className="col-5">
                  {residence.address.streetName}{" "}
                  {residence.address.streetNumber}
                </p>
                <p style={pTagStyle4} className="text-right col-7">(Datum)</p>
                <p style={pTagStyle2} className="my-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                  ab praesentium facilis rerum doloremque. Quidem aspernatur,
                  beatae, omnis suscipit veniam modi doloribus eius assumenda
                  placeat neque nam, magni ipsam sit?
                </p>
                <Row>
                  <Col xs="12" md="12">
                    <p style={pTagStyle3} className="col-12">
                      Bekvämligheter
                    </p>
                    <p>{ amenityArray.join(", ") }</p>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      ) : (
        <h1>Loading</h1>
      )}
    </>
  );
};

export default Residence;
