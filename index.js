window.addEventListener("load", () => {
  let longituade;
  let latitude;
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      longituade = position.coords.longitude;
      latitude = position.coords.latitude;
    });
  }
});
