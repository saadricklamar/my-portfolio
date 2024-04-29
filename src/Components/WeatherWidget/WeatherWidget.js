import React, { useEffect, useState } from "react";
import SnowIcon from "../../assets/weather-icons/clouds.svg";
import { ClipLoader } from "react-spinners";
import { TempDisplay, TempContainer, WeatherIcon } from "./styles";

const WeatherWidget = () => {
  const geoOptions = {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 0,
  };

  const [weatherData, setWeatherData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pos = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject, geoOptions);
        });
        const { latitude, longitude } = pos.coords;
        const response = await fetch(
          `https://api.tomorrow.io/v4/weather/realtime?location=${latitude},${longitude}&apikey=${process.env.REACT_APP_WEATHER_API_KEY}`
        );
        const weather = await response.json();
        setWeatherData(weather.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setLoading(false);
      }
    };

    fetchData();

    const intervalId = setInterval(fetchData, 30 * 60 * 1000);
    return () => clearInterval(intervalId);
  }, []);

  const determineTemperature = () => {
    return ((weatherData.values?.temperature * 9) / 5 + 32).toFixed(0);
  };

  return (
    <TempContainer>
      <WeatherIcon src={SnowIcon} aria-label="weather-icon" alt="weather" />
      {loading ? (
        <ClipLoader color="white" size="14px" />
      ) : (
        <TempDisplay>{determineTemperature()}&#176;</TempDisplay>
      )}
    </TempContainer>
  );
};

export default WeatherWidget;
