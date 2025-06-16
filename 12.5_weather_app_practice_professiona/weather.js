const API_KEY = 'f12a104527b73180797f07413ce646f4';

function getWeather() {
    document.getElementById('weatherInfo').innerHTML = "";
    document.getElementById('error').innerHTML = "";

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(fetchWeatherData, showError);
    } else {
        document.getElementById('error').innerHTML = "Geolocation API is not supported by this browser.";
    }
}

async function fetchWeatherData(position) {
    try {
        const { latitude, longitude } = position.coords;
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        const weatherDescription = data.weather[0].description;
        const temperature = data.main.temp;
        const city = data.name;

        const weatherInfo = `
            <strong>City:</strong> ${city}<br>
            <strong>Temperature:</strong> ${temperature}°C<br>
            <strong>Weather:</strong> ${weatherDescription}
        `;
        document.getElementById('weatherInfo').innerHTML = weatherInfo;
    } catch (err) {
        document.getElementById('error').innerHTML = "Failed to fetch weather data.";
    }
}

function showError(error) {
    const err = document.getElementById('error');
    switch (error.code) {
        case error.PERMISSION_DENIED:
            err.innerHTML = "User denied the request for Geolocation.";
            break;
        case error.POSITION_UNAVAILABLE:
            err.innerHTML = "Location information is unavailable.";
            break;
        case error.TIMEOUT:
            err.innerHTML = "Geolocation request timed out.";
            break;
        case error.UNKNOWN_ERROR:
            err.innerHTML = "An unknown error occurred.";
            break;
        default:
            err.innerHTML = "Something went wrong! Try again.";
    }
}
