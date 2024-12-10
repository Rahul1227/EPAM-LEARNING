if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    },
    (error) => console.error("Error obtaining location", error)
  );
} else {
  console.error("Geolocation is not supported by this browser.");
}

const API_KEY = "apiKey";
function fetchWeatherData(latitude, longitude) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }
      return response.json();
    })
    .then((data) => {
      localStorage.setItem("weatherData", JSON.stringify(data));
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
    });
}
function getLocation() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
        fetchWeatherData(latitude, longitude);
      },
      (error) => {
        console.error("Error obtaining location", error);
      }
    );
  } else {
    console.error("Geolocation is not supported by this browser.");
  }
}
getLocation();
const savedWeather = localStorage.getItem("weatherData");
console.log(savedWeather);












var API_KEY = "13231231221"function getGeoLocation() {    if ("geolocation" in navigator) {        navigator.geolocation.getCurrentPosition(            position => {                const latitude = position.coords.latitude;                const longitude = position.coords.longitude;                return [latitude, longitude];            },            error => console.error("Error obtaining location", error)        );    } else {        console.error("Geolocation is not supported by this browser.");    }}async function fetchWeather(latitude, longitude) {    try {        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)        return response;    } catch (error) {        console.error(error)    }}const location = getGeoLocation();const data = fetchWeather(location[0], location[1]);const storedData = localStorage.setItem("WeatherData", JSON.stringify(data));