window.addEventListener("load", () => {
  let longituade;
  let latitude;
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
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
          console.log(data);
          let { main, name, weather } = data;
        });
    });
  }
});
