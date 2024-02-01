const apiKey = "a415d8cf82704b42055740a7fc40886d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherInfo = document.querySelector(".weather-info");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{

    var data = await response.json();
 

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    document.querySelector(".visibility").innerHTML = data.visibility;
    document.querySelector(".sunrise").innerHTML = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
    document.querySelector(".sunset").innerHTML = new Date(data.sys.sunset * 1000).toLocaleTimeString();

    if(data.weather[0].main == "Clouds"){
        weatherInfo.src = "clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherInfo.src = "clear.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherInfo.src = "mist.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherInfo.src = "drizzle.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherInfo.src = "rain.png";
    }
    else if(data.weather[0].main == "Snow"){
        weatherInfo.src = "snow.png";
    }
    
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
}
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

