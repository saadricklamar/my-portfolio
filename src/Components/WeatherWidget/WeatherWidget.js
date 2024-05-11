import React, { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import { determineWeatherIcon } from "../../util/util";
import ReactTooltip from "react-tooltip";
import NotAvailableIcon from "../../assets/weather-icons/not-available.svg";
import { TempDisplay, TempContainer, WeatherIcon } from "./styles";

const WeatherWidget = () => {
  const reverse = require("reverse-geocode");
  const geoOptions = {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 0,
  };

  const [weatherData, setWeatherData] = useState({});
  const [loading, setLoading] = useState(true);
  const [dataError, setError] = useState(false);
  const [coordinates, setCoordinates] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, geoOptions);
      });

      const { latitude, longitude } = position.coords;
      setCoordinates(position.coords);

      const response = await fetch(
        `https://api.tomorrow.io/v4/weather/realtime?location=${latitude},${longitude}&apikey=${process.env.REACT_APP_WEATHER_API_KEY}`
      );
      if (!response.ok) {
        setError(true);
      }

      const weather = await response.json();
      setWeatherData(weather.data);
      setLoading(false);
    };

    fetchData();

    const intervalId = setInterval(fetchData, 30 * 60 * 1000);
    return () => clearInterval(intervalId);
  }, []);

  const determineTemperature = () => {
    return ((weatherData?.values.temperature * 9) / 5 + 32).toFixed(0);
  };

  return (
    <TempContainer>
      {loading ? (
        <ClipLoader color="white" size="14px" />
      ) : (
        <>
          {!dataError && (
            <>
              <ReactTooltip place="bottom" />
              <WeatherIcon
                src={determineWeatherIcon(weatherData?.values.weatherCode)}
                aria-label="Weather icon representing your local temperature"
                alt="Weather icon representing your local temperature"
                data-tip={`${
                  reverse.lookup(
                    coordinates.latitude,
                    coordinates.longitude,
                    "us"
                  ).city
                }`}
              />
              <TempDisplay>{determineTemperature()}&#176;</TempDisplay>
            </>
          )}
          {dataError && (
            <>
              <ReactTooltip place="bottom" />
              <WeatherIcon
                src={NotAvailableIcon}
                alt="Weather data not available icon"
                data-tip="Weather data unavailable"
              />
            </>
          )}
        </>
      )}
    </TempContainer>
  );
};

export default WeatherWidget;
