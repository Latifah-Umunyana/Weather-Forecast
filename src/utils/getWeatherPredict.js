export const GetWeatherPredict = async (city) => {
    const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=ff3849a4b8b13f1580ed2648b900e79a&units=metric`
    try {
        const response = await fetch(baseUrl);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        throw new Error(`Failed to fetch weather info: ${error.message}`);
    }
};
