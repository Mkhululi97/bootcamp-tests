function fromWhere(place) {
  if (place.startsWith("CY")) {
    return "Bellville";
  }
  if (place.startsWith("CJ")) {
    return "Paarl";
  }
  if (place.startsWith("CA")) {
    return "Cape Town";
  } else {
    return "Some other place!";
  }
}
