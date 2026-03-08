const apiKey = "aef9398ba8394956abb165923261501";

function getWeather() {
    const city = document.getElementById("city").value;

    if (city === "") {
        alert("Please enter city name");
        return;
    }

    fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById("weatherInfo").innerHTML = `
                <h3>${data.location.name}, ${data.location.country}</h3>
                <p>🌡️ Temperature: ${data.current.temp_c}°C</p>
                <p>☁️ Condition: ${data.current.condition.text}</p>
                <p>💧 Humidity: ${data.current.humidity}%</p>
                <p>🌬️ Wind: ${data.current.wind_kph} km/h</p>
            `;
        })
        .catch(() => {
            document.getElementById("weatherInfo").innerHTML =
                "<p>City not found!</p>";
        });
}
document.getElementById("getWeatherBtn").addEventListener("click", getWeather);