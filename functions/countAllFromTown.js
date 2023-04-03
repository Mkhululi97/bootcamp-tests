function countAllFromTown(registrationNumbers, location) {
  var counter = 0;
  var registrationNumbersArray = registrationNumbers.split(",");
  for (var i = 0; i < registrationNumbersArray.length; i++) {
    if (registrationNumbersArray[i].trim().startsWith(location)) {
      counter++;
    }
  }
  return counter;
}
