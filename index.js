window.addEventListener("load", () => {
  let longituade;
  let latitude;
  let timezone = document.querySelector(".location-timezone");
  let tempDegree = document.querySelector(".temperature-degree");
  let tempDescription = document.querySelector(".temperature-description");
  let locationIcon = document.querySelector(".weather-icon");
  let degree = document.querySelector(".degree");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      longituade = position.coords.longitude;
      latitude = position.coords.latitude;
      apiId = "3f545d72c679d214b0570549993af882";
      api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longituade}&appid=${apiId}&units=metric`;
      console.log(api);
      fetch(api)
        .then((data) => {
          return data.json();
        })
        .then((data) => {
          let { main, name, weather } = data;
          tempDegree.textContent = Math.floor(main.temp);
          tempDescription.textContent = weather[weather.length - 1].description;
          timezone.textContent = name;
          icon = `./icons/${weather[weather.length - 1].icon}.png`;
          locationIcon.src = icon;

          degree.addEventListener("click", () => {
            if (degree.lastElementChild.textContent === "C") {
              api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longituade}&appid=${apiId}&units=Imperial`;
              fetch(api)
                .then((data) => data.json())
                .then((data) => {
                  let { main } = data;
                  tempDegree.textContent = Math.floor(main.temp);
                  tempDegree.nextElementSibling.textContent = "F";
                });
            } else {
              api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longituade}&appid=${apiId}&units=metric`;
              fetch(api)
                .then((data) => data.json())
                .then((data) => {
                  let { main } = data;
                  tempDegree.textContent = Math.floor(main.temp);
                  tempDegree.nextElementSibling.textContent = "C";
                });
            }
          });
        });
    });
  }
});
