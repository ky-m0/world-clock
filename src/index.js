// declare variable for timer interval
let cityInterval = null;
// show time and date on large 'tiles' (div class="city")
function updateTime() {
  // Melbourne
  let melbourneElement = document.querySelector("#melbourne");
  if (melbourneElement) {
    let melbourneDateElement = melbourneElement.querySelector(".date");
    let melbourneTimeElement = melbourneElement.querySelector(".time");
    let melbourneTime = moment().tz("Australia/Melbourne");

    melbourneDateElement.innerHTML = melbourneTime.format("dddd, Do MMMM YYYY");
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

    newYorkDateElement.innerHTML = newYorkTime.format("dddd, Do MMMM YYYY");
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

    londonDateElement.innerHTML = londonTime.format("dddd, Do MMMM YYYY");
    londonTimeElement.innerHTML = londonTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

// update city tile for selected city (replaces the city div)
function updateCity(event) {
  let cityTimeZone = event.target.value;
  //exit / avoid errors if 'select a city' is selected
  if (cityTimeZone === "") {
    return;
  }
  // Guess user's actual time zone, based on their device
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);

  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
    <div class="city">
        <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("dddd, Do MMMM YYYY")}</div>
        </div>
        <div class="time">${cityTime.format(
          "h:mm:ss"
        )} <small>${cityTime.format("A")}</small></div>
    </div>
    <a href="/"><small>Reset city 🔄</small></a>
    `;

  // clear any previous interval
  if (cityInterval) {
    clearInterval(cityInterval);
  }
  // start new timer for a selected city - get current date and time, then update for .date and .time inside .city
  cityInterval = setInterval(function () {
    let newTime = moment().tz(cityTimeZone);
    let dateElement = document.querySelector(".city .date");
    let timeElement = document.querySelector(".city .time");

    dateElement.innerHTML = newTime.format("dddd, Do MMMM YYYY");
    timeElement.innerHTML = `${newTime.format(
      "h:mm:ss"
    )} <small>${newTime.format("A")}</small>`;
  }, 1000);
}

// call function to show date and time on tiles
updateTime();
// update page every second to show accurate minutes (within 1 second accuracy)
setInterval(updateTime, 1000);

// event listener on city selection
let citiesSelectElement = document.querySelector("#city-selector");
citiesSelectElement.addEventListener("change", updateCity);
