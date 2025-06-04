// New York
let newYorkElement = document.querySelector("#new-york");
let newYorkDateElement = newYorkElement.querySelector(".date");
let newYorkTimeElement = newYorkElement.querySelector(".time");
let newYorkTime = moment().tz("America/New_York");

newYorkDateElement.innerHTML = newYorkTime.format("dddd, d MMMM YYYY");
newYorkTimeElement.innerHTML = newYorkTime.format(
  "h:mm:ss [<small>]A[</small>]"
);
