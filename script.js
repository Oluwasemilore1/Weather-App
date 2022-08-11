const searchBtn = document.getElementById('Search')
let temperature = document.getElementById('weather-temp');
let city = document.getElementById('location')
let ions = document.getElementById('weather-icon')
let dayday = document.getElementById('date-name')
let cweather = document.getElementById('weather-desc')
let dayname = document.getElementById('day-dayname')

getDays();

//Event Listeners
searchBtn.addEventListener('click', getWeatherDetails);

function getWeatherDetails() {
    let searchInputTxt = document.getElementById('search-input').value;
   
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${searchInputTxt}?unitGroup=metric&key=G3W2C9R5DN23VPB2HHAG4XEHJ&contentType=json`)
    .then(response => response.json())
    .then(getWeatherDetails => {
        // let temp = getWeatherDetails.days[0].temp;
        // let date = getWeatherDetails.days[0].datetime;
        // let location = getWeatherDetails.resolvedAddress;
        // let cwea = getWeatherDetails.days[0].description;
        // let icons = getWeatherDetails.days[0].icon;
        // temperature.append(temp)
        // cweather.append(cwea)
        // dayday.append(date)
        // city.append(location)
        // ions.append(icons)

        city.textContent = getWeatherDetails.resolvedAddress
        ions.textContent = getWeatherDetails.days[0].icon
        temperature.textContent = `${getWeatherDetails.days[0].temp}`
        dayday.textContent = getWeatherDetails.days[0].datetime
        cweather.textContent = getWeatherDetails.days[0].description
        

        // if (ions.textContent == 'rain') {
        // //    return document.body.style.backgroundImage 
        //     console.log('good');
        // } 
        // if (ions.textContent == 'rain') {
        // //    return document.body.style.backgroundImage = url('./Images/cloudybg.avif')
        //         // return `<img src"${./Images/cloudybg.avif}">`
        //     console.log('good');
        // } 
        // if (ions.textContent == 'partly-cloudy-day') {
        // //    return document.body.style.backgroundImage = url('./Images/cloudybg.avif')
        //         // return `<img src"${./Images/cloudybg.avif}">`
        //     console.log('good');
        // } 
        // if (ions.textContent == '') {
        // //    return document.body.style.backgroundImage = url('./Images/cloudybg.avif')
        //         // return `<img src"${./Images/cloudybg.avif}">`
        //     console.log('good');
        // } 
        // else {
        //     console.log('not good');
        // }
    })
        // searchInputTxt.value = '';   
}

function getDays() {
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const d = new Date();
    let day = weekday[d.getDay()];
    document.getElementById("day-dayname").innerHTML = day;
}

