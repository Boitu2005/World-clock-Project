function updateTime() {
  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");
    let londonTime = moment().tz("Europe/london");

    londonDateElement.innerHTML = londonTime.format("MMM Do YYYY");
    londonTimeElement.innerHTML = londonTime.format(
      "h:m:ss[<small>]A[</small>]"
    );
  }
  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoDateElement = tokyoElement.querySelector(".date");
    let tokyoTimeElement = tokyoElement.querySelector(".time");
    let tokyoTime = moment().tz("Asia/Tokyo");

    tokyoDateElement.innerHTML = tokyoTime.format("MMM Do YYYY");
    tokyoTimeElement.innerHTML = tokyoTime.format("h:m:ss[<small>]A[</small>]");
  }
  let maseruElement = document.querySelector("#maseru");
  if (maseruElement) {
    let maseruDateElement = maseruElement.querySelector(".date");
    let maseruTimeElement = maseruElement.querySelector(".time");
    let maseruTime = moment().tz("Lesotho/Maseru");

    maseruDateElement.innerHTML = maseruTime.format("MMM Do YYYY");
    maseruTimeElement.innerHTML = maseruTime.format(
      "h:m:ss[<small>]A[</small>]"
    );
  }
}
function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = ` <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )}<small>${cityTime.format("A")}</small>
    </div>
        </div>`;
}
updateTime();
setInterval(updateTime, 1000);
let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
