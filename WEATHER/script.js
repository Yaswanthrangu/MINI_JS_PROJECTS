const apiKey = "b88a7ff2eadb6dd7341718ff16e631fd";

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const error = document.querySelector(".error");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status === 404) {
        error.style.display = "block";
    }

    else {

        error.style.display = "none";

        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity+ "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if(data.weather[0].main === "Clouds") {
            weatherIcon.src = "Images/clouds.png";
        }
        else if(data.weather[0].main === "Clear") {
            weatherIcon.src = "Images/clear.png";
        }
        else if(data.weather[0].main === "Drizzle") {
            weatherIcon.src = "Images/drizzle.png";
        }
        else if(data.weather[0].main === "Mist") {
            weatherIcon.src = "Images/mist.png";
        }
        else if(data.weather[0].main === "Rain") {
            weatherIcon.src = "Images/rain.png";
        }

        document.querySelector(".weather").style.display = "block";

    }
}


searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})