import { useState, useEffect } from "react";
import { GetWeatherPredict } from "../utils/getWeatherPredict";

export const usePredictWeather = (city) => {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {

            try {
                const response = await GetWeatherPredict(city);
                setWeather(response);
            } catch (err) {
                console.error("Error fetching weather:", err);
            }
        };

        fetchWeather();
    }, [city]);

    return weather;
};
