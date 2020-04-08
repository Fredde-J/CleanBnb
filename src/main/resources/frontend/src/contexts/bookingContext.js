import React, { createContext, useState } from "react";

export const BookingContext = createContext();

const BookingContextProvider = props => {
  
  const [booking, setBooking] = useState(BookingContext)

  const fetchBookings = async () => {
        let res = await fetch("/rest/getAllBookings");
        try {
          res = await res.json();
          setBooking(res);
          console.log(res);
        } catch {
           console.log('Not logged in');
        }
  }

  const values = {
    booking,
    setBooking,

  }
  return (
    <BookingContext.Provider value={values}>
      {props.children}
    </BookingContext.Provider>
  );
};

export default BookingContextProvider;
