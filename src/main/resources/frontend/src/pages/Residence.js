import React, { useState, useEffect, useContext } from "react";
import { Row, Col } from "reactstrap";
import { UserContext } from "../contexts/UserContext";
import { ResidenceContext } from "../contexts/ResidenceContext";
import {
  imgStyle,
  divStyle2,
  pTagStyle1,
  pTagStyle2,
  pTagStyle3,
  pTagStyle4,
  buttonStyle,
} from "../css/ResidenceCardStyle";

const Residence = (props) => {
  const [listing, setListing] = useState(null);
  const { chosenResidence, setChosenResidence } = useContext(ResidenceContext);
  const { user } = useContext(UserContext);
  const { history } = props;

  const goToBookingComponent = () => {
    setChosenResidence(listing);
  };
  const goToLogInPage = () => {
    setChosenResidence(listing);
    history.push(`/residences/${listing.residence.residenceId}/preform-login`);
  };

  const fetchOneResidence = async (id) => {
    let res = await fetch(`/rest/availability/${id}`);
    res = await res.json();
    setListing(res);
  };

  useEffect(() => {
    console.log(props.match.params.residenceId);
    fetchOneResidence(props.match.params.residenceId);
  }, [props.match.params.residenceId]);

  useEffect(() => {
    if (listing && chosenResidence) {
      console.log("In Residence, chosenResidence: ", chosenResidence)
      history.push(`/residences/${listing.residence.residenceId}/booking`);
    }
    // eslint-disable-next-line
  }, [chosenResidence]);

  let amenityArray = [];

  if (listing) {
    Object.entries(listing.residence.amenity).forEach((array, i) => {
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
      {listing ? (
        <Row>
          <Col xs="12" md={{ size: 8, offset: 2 }}>
            <div style={divStyle2} className="card my-3 p-3 bg-warning">
              <img
                style={imgStyle}
                className="card-img-top"
                src={listing.residence.images}
                alt=""
              ></img>
              <div className="card-body row">
                <p style={pTagStyle1} className="col-6">
                  {listing.residence.address.city}
                </p>
                <p style={pTagStyle1} className="text-right col-6">
                  {listing.residence.price} / natt
                </p>
                <p style={pTagStyle4} className="col-6">
                  {listing.residence.address.streetName}{" "}
                  {listing.residence.address.streetNumber}
                </p>
                <p style={pTagStyle4} className="text-right col-6">
                  {listing.startDate} - {listing.endDate}
                </p>
                <p style={pTagStyle4} className="col-12">
                  {listing.residence.beds}{" "}
                  {listing.residence.beds > 1 ? "st sängar" : "st säng"}
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
                <button
                  style={buttonStyle}
                  className="col-12 col-md-6 offset-md-3 mt-4 btn btn-warning"
                  onClick={user ? goToBookingComponent : goToLogInPage}
                >
                  {user ? "Boka" : "Logga in för att Boka"}
                </button>
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
