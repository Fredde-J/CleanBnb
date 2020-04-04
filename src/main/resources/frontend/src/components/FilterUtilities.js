export const filterAmenities = (fa, re, fr) => {
  // fa = filter.amenity, r = residences, fr = filteredResidences.

  if (fa.balkong) {
    fr = fr
      ? fr.filter(r => r.amenity.balkog)
      : re.filter(r => r.amenity.balkong);
  }
  if (fa.badkar) {
    fr = fr
      ? fr.filter(r => r.amenity.badkar)
      : re.filter(r => r.amenity.badkar);
  }
  if (fa.diskmaskin) {
    fr = fr
      ? fr.filter(r => r.amenity.diskmaskin)
      : re.filter(r => r.amenity.diskmaskin);
  }
  if (fa.frys) {
    fr = fr
      ? fr.filter(r => r.amenity.frys)
      : re.filter(r => r.amenity.frys);
  }
  if (fa.kyl) {
    fr = fr
      ? fr.filter(r => r.amenity.kyl)
      : re.filter(r => r.amenity.kyl);
  }
  if (fa.tv) {
    fr = fr
      ? fr.filter(r => r.amenity.tv)
      : re.filter(r => r.amenity.tv);
  }
  if (fa.tvättmaskin) {
    fr = fr
      ? fr.filter(r => r.amenity.tvättmaskin)
      : re.filter(r => r.amenity.tvättmaskin);
  }
  if (fa.wifi) {
    fr = fr
      ? fr.filter(r => r.amenity.wifi)
      : re.filter(r => r.amenity.wifi);
  }

  return fr ? fr : re;
};
