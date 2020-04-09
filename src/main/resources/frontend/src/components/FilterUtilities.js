// fa = filter.amenity, fr = filteredResidences, l = listing

export const filterPrices = (price, fr) => {
  return fr.filter((l) => l.residence.price <= price);
};
export const filterBeds = (beds, fr) => {
  return fr.filter((l) => l.residence.beds === beds);
};
export const filterCities = (city, fr) => {
  return fr.filter((l) => l.residence.address.city === city);
};
export const filterAmenities = (fa, fr) => {
  fr = fa.balkong ? fr.filter((l) => l.residence.amenity.balkong) : fr;
  fr = fa.badkar ? fr.filter((l) => l.residence.amenity.badkar) : fr;
  fr = fa.diskmaskin ? fr.filter((l) => l.residence.amenity.diskmaskin) : fr;
  fr = fa.frys ? fr.filter((l) => l.residence.amenity.frys) : fr;
  fr = fa.kyl ? fr.filter((l) => l.residence.amenity.kyl) : fr;
  fr = fa.tv ? fr.filter((l) => l.residence.amenity.tv) : fr;
  fr = fa.tvättmaskin ? fr.filter((l) => l.residence.amenity.tvättmaskin) : fr;
  fr = fa.wifi ? fr.filter((l) => l.residence.amenity.wifi) : fr;
  return fr;
};
