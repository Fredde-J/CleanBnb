import React, { useState, useEffect, useContext } from "react";
import { Row, Col } from "reactstrap";
import { UserContext } from "../contexts/UserContext";
import {
  imgStyle,
  divStyle2,
  pTagStyle1,
  pTagStyle2,
  pTagStyle3,
  pTagStyle4,
  buttonStyle
} from "../css/ResidenceCardStyle";

const Residence = props => {
  const { history } = props;

  const [residence, setResidence] = useState(null);

    const goToLogin = () => {
      history.push("/");
    };

    const goToBookingComponent = () => {
      history.push("/booking-component");
    }

  const { user } = useContext(UserContext);

  const fetchOneResidence = async id => {
    let res = await fetch(`/rest/residences/${id}`);
    res = await res.json();
    // console.log(res);
    setResidence(res);
  };

  useEffect(() => {
    fetchOneResidence(props.match.params.residenceId);
  }, [props.match.params.residenceId]);

  let amenityArray = [];

  if (residence) {
    Object.entries(residence.amenity).forEach((array, i) => {
      if (i !== 0) {
        if (array[1]) {
          amenityArray.push(
            array[0].charAt(0).toUpperCase() + array[0].slice(1)
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
            <div style={divStyle2} className="card my-3 p-3 bg-warning">
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
                <p style={pTagStyle4} className="col-7">
                  {residence.address.streetName}{" "}
                  {residence.address.streetNumber}
                </p>
                <p style={pTagStyle4} className="text-right col-5">
                  (Datum)
                </p>
                <p style={pTagStyle4} className="col-12">
                  {residence.beds}{" "}
                  {residence.beds > 1 ? "st sängar" : "st säng"}
                </p>
                <p style={pTagStyle2} className="col-12 my-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates, harum! Voluptatibus perferendis quaerat minus
                  doloribus dolore eum placeat error accusamus nam, aliquid
                  culpa odio nihil illum animi tempora consequatur debitis
                  adipisci corrupti quia fugiat sunt eveniet officia aperiam!
                  Magnam nostrum aspernatur veritatis adipisci reprehenderit
                  explicabo, error nesciunt libero laudantium cupiditate?
                </p>
                <Row>
                  <Col xs="12">
                    <p style={pTagStyle3} className="col-12">
                      Bekvämligheter
                    </p>
                    <p style={pTagStyle4} className="col-12">
                      {amenityArray.join(", ")}
                    </p>
                  </Col>
                </Row>
                {user ? (
                  <button
                    style={buttonStyle}
                    className="col-12 col-md-6 offset-md-3 mt-4 btn btn-warning"
                    onClick={goToBookingComponent}
                  >
                    Boka
                  </button>
                ) : (
                  <button
                    style={buttonStyle}
                    className="col-12 col-md-6 offset-md-3 mt-4 btn btn-warning"
                    onClick={goToLogin}
                  >
                    Logga in
                  </button>
                )}
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
