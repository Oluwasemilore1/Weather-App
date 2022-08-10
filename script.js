const searchBtn = document.getElementById('Search')

//Event Listeners
searchBtn.addEventListener('click', getWeatherDetails);

function getWeatherDetails(e) {
    e.preventDefault()
    let searchInputTxt = document.getElementById('search-input').value;
    let temperature = document.getElementById('weather-temp');
    let city = document.getElementById('location')
    let ions = document.getElementById('weather-icon')
    let dayday = document.getElementById('date-name')
    let cweather = document.getElementById('weather-desc')
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${searchInputTxt}?unitGroup=metric&key=G3W2C9R5DN23VPB2HHAG4XEHJ&contentType=json`)
    .then(response => response.json())
    .then(getWeatherDetails => {
        let temp = getWeatherDetails.days[0].temp;
        let date = getWeatherDetails.days[0].datetime;
        let location = getWeatherDetails.resolvedAddress;
        let cwea = getWeatherDetails.days[0].description;
        let icons = getWeatherDetails.days[0].icon;
        temperature.append(temp)
        cweather.append(cwea)
        dayday.append(date)
        city.append(location)
        ions.append(icons)

        if (icon = partly-cloudy-day) {
            
        }

    })
    
}