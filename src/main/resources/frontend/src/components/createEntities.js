export const getNewAddressId = async (address) => {

    let res = await fetch("/rest/addresses", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(address),
    });
    res = await res.json();

    return res.addressId;

}

export const getNewAmenityId = async (amenity) => {
   let res = await fetch("/rest/amenities", {
     method: "POST",
     headers: { "Content-Type": "application/json" },
     body: JSON.stringify(amenity),
   });
   res = await res.json();

   return res.amenityId;
};

export const getResidenceToCreate = async (residence) => {
  let res = await fetch("/rest/residences", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(residence),
  });
  res = await res.json();

  return res;
};