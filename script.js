const searchBtn = document.getElementById('Search')

//Event Listeners
searchBtn.addEventListener('click', getWeatherDetails);

function getWeatherDetails() {
    let searchInputTxt = document.getElementById('search-input').value;
    let temperature = document.getElementById('weather-temp');
    let location = document.getElementById('location')
    let description = document.getElementById('weather-desc')
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchInputTxt}&appid=8e65f3e946066c4560cf1eb26a055165`)
    .then(response => response.json())
    .then(getWeatherDetails => {
        let temp = getWeatherDetails.main.temp;
        let description = getWeatherDetails.weather.description;
        // let location = getWeatherDetails.name;
        console.log(temp);
        temperature.append(temp)
        description.append()
        // location.append(location)
    })
    
}