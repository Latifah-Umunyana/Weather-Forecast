import React, { useState } from "react";
import './index.css';
import { GetWeatherPredict } from "../../utils/getWeatherPredict";

const Weather = () => {
  const [searchValue, setSearchValue] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    if (!searchValue) {
      setError('Please enter a city name');
      return;
    }

    setLoading(true);
    setError('');
    try {
      const data = await GetWeatherPredict(searchValue);
      setWeatherData(data);
    } catch (err) {
      setError(`Failed to retrieve weather info: City not found`);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="weather-container">
      <img
        src="/Images/weather-bg.jpg"
        alt="Weather Background"
        className="background-img"
      />

      <div className="overlay-card">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search City or Country"
            value={searchValue}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
          <span className="search-icon" onClick={handleSearch}>
            <img
              src="/Images/search-svgrepo-com.png"
              alt="Search Icon"
            />
          </span>
        </div>

        {loading &&
          <div className="loader"></div>
        }
        {error && <div className="error">{error}</div>}

        {!loading && !error && !weatherData && (
          <div>
            <img
              src="/Images/weather-icon.png"
              alt="weather icon"
              className="weather-icon"
            />
            <h2 className="temperature">Panga Meteo</h2>
            <p className="description">
              "Plan Your Day with Panga Meteo: Real Weather, Real Data"
            </p>
          </div>
        )}

        {!loading && !error && weatherData && (
          <div>
            <h1 className="city-name">{weatherData.name}</h1>

            <img
              src="/Images/weather-icon.png"
              alt="weather icon"
              className="weather-icon"
            />

            <h2 className="temperature">{`${weatherData.main.temp} °C`}</h2>

            <p className="description">
              {`${weatherData.weather[0].description} expected today`}
            </p>

            <div className="stats-container">
              <div className="stat">
                <img
                  src="/Images/pressure-svgrepo-com.png"
                  alt="pressure"
                />
                <h1>{`${weatherData.main.pressure} hPa`}</h1>
              </div>

              <div className="stat">
                <img
                  src="/Images/humidity-svgrepo-com.png"
                  alt="humidity"
                />
                <h1>{`${weatherData.main.humidity}%`}</h1>
              </div>

              <div className="stat">
                <img
                  src="/Images/speed-svgrepo-com (2).png"
                  alt="wind speed"
                />
                <h1>{`${weatherData.wind.speed} m/s`}</h1>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
