import React, { useContext, useEffect } from "react";
import BookingCard from "../components/BookingCard";
import { UserContext } from "../contexts/UserContext";
import { BookingContext } from "../contexts/BookingContext";
import { Row, Col } from "reactstrap";

const Bookings = () => {
  const { user } = useContext(UserContext);
  const { bookings, fetchBookings } = useContext(BookingContext);

  const checkStartDateOnBooking = (booking) => {
    if ((Date.parse(booking.endDate) - new Date()) / 86400000 > 0) {
      return true;
    } else {
      return false;
    }
  };

  const checkEndDateOnBooking = (booking) => {
    if ((Date.parse(booking.endDate) - new Date()) / 86400000 < 0) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    fetchBookings();
  }, [])

  return (
    <>
      {user ? (
        <Row>
          <Col className="col-12 col-md-6">
            <h2 className="text-center mt-3">Aktuella bokningar</h2>
            {bookings.map((booking, i) => (
              <div>
                {booking.user.userId === user.userId ? (
                  <div>
                    {checkStartDateOnBooking(booking) ? (
                      <BookingCard
                        key={booking.bookingId}
                        booking={booking}
                      ></BookingCard>
                    ) : (
                      ""
                    )}
                  </div>
                ) : (
                  ""
                )}
              </div>
            ))}
          </Col>
          <Col className="col-12 col-md-6">
            <h2 className="text-center mt-3">Tidigare bokningar</h2>
            {bookings.map((booking) => (
              <div>
                {booking.user.userId === user.userId ? (
                  <div>
                    {checkEndDateOnBooking(booking) ? (
                      <BookingCard
                        key={booking.bookingId}
                        booking={booking}
                      ></BookingCard>
                    ) : (
                      ""
                    )}
                  </div>
                ) : (
                  ""
                )}
              </div>
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
