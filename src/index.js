// show time and date on large 'tiles' (div class="city")
function updateTime() {
  // Current location
  //let currentLocationElement = document.querySelector("#current-location");
  //if (currentLocationElement) {
  //  let currentLocationDateElement =
  //    currentLocationElement.querySelector(".date");
  //  let currentLocationTimeElement =
  //    currentLocationElement.querySelector(".time");
  //  let currentLocationTime = moment().tz.guess();

  //  currentLocationDateElement.innerHTML =
  //    currentLocationTime.format("dddd, d MMMM YYYY");
  //  currentLocationTimeElement.innerHTML = currentLocationTime.format(
  //    "h:mm:ss [<small>]A[</small>]"
  //  );
  //}

  // Melbourne
  let melbourneElement = document.querySelector("#melbourne");
  if (melbourneElement) {
    let melbourneDateElement = melbourneElement.querySelector(".date");
    let melbourneTimeElement = melbourneElement.querySelector(".time");
    let melbourneTime = moment().tz("Australia/Melbourne");

    melbourneDateElement.innerHTML = melbourneTime.format("dddd, d MMMM YYYY");
    melbourneTimeElement.innerHTML = melbourneTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  // New York
  let newYorkElement = document.querySelector("#new-york");
  if (newYorkElement) {
    let newYorkDateElement = newYorkElement.querySelector(".date");
    let newYorkTimeElement = newYorkElement.querySelector(".time");
    let newYorkTime = moment().tz("America/New_York");

    newYorkDateElement.innerHTML = newYorkTime.format("dddd, d MMMM YYYY");
    newYorkTimeElement.innerHTML = newYorkTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // London
  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");
    let londonTime = moment().tz("Europe/London");

    londonDateElement.innerHTML = londonTime.format("dddd, d MMMM YYYY");
    londonTimeElement.innerHTML = londonTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

// steps - update city tiles for new cities

// update UI
// function to replace the city div

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  //console.log(cityTimeZone);
  //console.log(cityTime.format("dddd, d MMMM YYYY"));
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
    <div class="city">
        <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("dddd, d MMMM YYYY")}</div>
        </div>
        <div class="time">${cityTime.format(
          "h:mm:ss"
        )} <small>${cityTime.format("A")}</small></div>
    </div>
    `;
}
// TODO: add update every second after UI updated

// call function to show date and time on tiles
updateTime();
// update page every second to show accurate seconds
setInterval(updateTime, 1000);

// 1. event listener on select
let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
