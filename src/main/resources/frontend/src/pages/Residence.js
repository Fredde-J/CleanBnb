import React, { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";

import { imgStyle, divStyle } from "../css/ResidenceCardStyle";

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
  }, []);

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
                <p className="col m-0">Malmö</p>
                <p className="text-right col m-0">2000 - 4000</p>
                <p className="col-5 m-0 ">Storgatan 12</p>
                <p className="text-right col-7 m-0">23 Mars - 22 Mars</p>
                <p className="my-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam alias dolorum, doloribus facilis provident vitae
                  consectetur repellendus quam placeat, cupiditate nostrum unde
                  voluptate saepe harum temporibus quasi mollitia ratione
                  praesentium.
                </p>
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
