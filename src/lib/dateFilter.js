export function dateFilter(value) {
  const dateObject = new Date(value);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dayWithSuffix = dateObject.getDate();

  return `${months[dateObject.getMonth()]} ${dayWithSuffix}, ${dateObject.getFullYear()}`;
}
