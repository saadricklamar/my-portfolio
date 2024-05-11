import Sun from "../assets/weather-icons/sun.svg";
import Clouds from "../assets/weather-icons/clouds.svg";
import Rain from "../assets/weather-icons/rain.svg";
import Snow from "../assets/weather-icons/snow.svg";
import Storm from "../assets/weather-icons/storm.svg";
import { WeatherCodes } from "../data/weatherData";

const weatherIcons = {
  sun: Sun,
  clouds: Clouds,
  rain: Rain,
  snow: Snow,
  storm: Storm,
};

export const determineWeatherIcon = (weatherCode) => {
  for (let key in WeatherCodes) {
    if (WeatherCodes[key].includes(weatherCode)) {
      return weatherIcons[key];
    }
  }
  return null;
};
