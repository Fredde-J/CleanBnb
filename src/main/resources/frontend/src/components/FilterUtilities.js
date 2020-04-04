// fa = filter.amenity, fr = filteredResidences, r = residence

export const filterPrices = (price, fr) => {
  return fr.filter(r => r.price <= price);
};

export const filterBeds = (beds, fr) => {
  return fr.filter(r => r.beds === beds);
};

export const filterCities = (city, fr) => {
  return fr.filter(r => r.address.city === city);
};

export const filterAmenities = (fa, fr) => {
  fr = fa.balkong ? fr.filter(r => r.amenity.balkong) : fr;
  fr = fa.badkar ? fr.filter(r => r.amenity.badkar) : fr;
  fr = fa.diskmaskin ? fr.filter(r => r.amenity.diskmaskin) : fr;
  fr = fa.frys ? fr.filter(r => r.amenity.frys) : fr;
  fr = fa.kyl ? fr.filter(r => r.amenity.kyl) : fr;
  fr = fa.tv ? fr.filter(r => r.amenity.tv) : fr;
  fr = fa.tvättmaskin ? fr.filter(r => r.amenity.tvättmaskin) : fr;
  fr = fa.wifi ? fr.filter(r => r.amenity.wifi) : fr;
  return fr;
};
