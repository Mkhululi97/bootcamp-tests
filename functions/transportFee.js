var shifts = "morning, noon, night";
function transportFee(shifts) {
  var morningShift = shifts.includes("morning");
  var noonShift = shifts.includes("noon");
  var nightShift = shifts.includes("night");
  if (morningShift) {
    return "R20";
  } else if (noonShift) {
    return "R10";
  } else if (nightShift) {
    return "free";
  } else {
    return "Invalid shift";
  }
}
