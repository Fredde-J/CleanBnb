import React, { useContext } from "react";
import BookingCard from "../components/BookingCard";
import { UserContext } from "../contexts/UserContext";
import { BookingContext } from "../contexts/BookingContext";
import { Row, Col } from "reactstrap";

const Bookings = () => {
  const { user } = useContext(UserContext);
  const { bookings } = useContext(BookingContext);

  return (
    <>
      {user ? (
        <Row>
          <Col className=" col-12 col-md-6">
            <h2 className="text-center">Kommande bokningar</h2>
            {bookings.map((booking, i) => (
              <BookingCard
                key={booking.bookingid + i}
                booking={booking}
              ></BookingCard>
            ))}
          </Col>
          <Col className="col-12 col-md-6">
            <h2 className="text-center">Tidigare bokningar</h2>
            {bookings.map((booking, i) => (
              <BookingCard
                key={booking.bookingid + i}
                booking={booking}
              ></BookingCard>
            ))}
          </Col>
        </Row>
      ) : (
        <h1>Ej inloggad</h1>
      )}
    </>
  );
};
export default Bookings;
