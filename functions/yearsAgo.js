function yearsAgo(year) {
  const detailedDate = new Date();
  const currentYear = detailedDate.getFullYear();
  var yearsOld = currentYear - year;
  return yearsOld;
}
