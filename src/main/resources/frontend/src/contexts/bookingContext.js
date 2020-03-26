import React, { createContext, useState } from "react";

export const BookingContext = createContext();

const BookingContextProvider = props => {

  return (
    <BookingContext.Provider value={}>
      {props.children}
    </BookingContext.Provider>
  );
};

export default BookingContextProvider;
