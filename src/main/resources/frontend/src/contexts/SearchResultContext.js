import React, { createContext, useState } from "react";

export const SearchResultContext = createContext();

const SearchResultContextProvider = props => {

  const [searchResults, setSearchResults] = useState([
    {
      streetName: "Rosengårdsgatan 10",
      pris: 560,
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque in atque voluptatibus delectus facilis velit modi fuga harum similique minus?",
      image: "/images/lägenhet1.jpg",
      id: 1
    },
    {
      streetName: "Rosengårdsgatan 11",
      pris: 560,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In vero vitae dolores molestias corporis obcaecati suscipit animi esse veniam asperiores",
      image: "/images/lägenhet2.jpg",
      id: 3
    },
    {
      streetName: "Rosengårdsgatan 12",
      pris: 560,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo tempora laborum vitae aliquid minima cumque natus sapiente quisquam debitis a",
      image: "/images/lägenhet3.jpg",
      id: 2
    }
  ]);


  return (
    <SearchResultContext.Provider value={{searchResults}}>
      {props.children}
    </SearchResultContext.Provider>
  );
};

export default SearchResultContextProvider;
