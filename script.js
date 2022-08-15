const searchBtn = document.getElementById('Search')
let temperature = document.getElementById('weather-temp');
let city = document.getElementById('location')
let ions = document.getElementById('weather-icon')
let dayday = document.getElementById('date-name')
let cweather = document.getElementById('weather-desc')
let dayname = document.getElementById('day-dayname')
let wrapper = document.getElementById('wrapper')

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
        

        if (ions.textContent == 'rain') {
        //    return document.body.style.backgroundImage 
            // console.log('good');
            wrapper.style.backgroundImage = "url('https://images.unsplash.com/photo-1587749429368-ed1fe6fd6d17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZGFyayUyMGZvcmVzdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60')"
            // wrapper.style.backgroundColor = 'green'
        } 
        // if (ions.textContent == 'rain') {
        // //    return document.body.style.backgroundImage = url('./Images/cloudybg.avif')
        //         // return `<img src"${./Images/cloudybg.avif}">`
        //     console.log('good');
        // } 
        // if (ions.textContent == 'partly-cloudy-day') {
        // //    return document.body.style.backgroundImage = url('./Images/cloudybg.avif')
        //         // return `<img src"${./Images/cloudybg.avif}">`
        //     // console.log('good');
        //     // wrapper.style.backgroundColor = 'yellow'
        // } 
        // if (ions.textContent == 'sunny') {
        // //    return document.body.style.backgroundImage = url('./Images/cloudybg.avif')
        //         // return `<img src"${./Images/cloudybg.avif}">`
        //     console.log('good');
        // } 
        else {
            // console.log('not good');
            wrapper.style.backgroundImage = "url('https://images.unsplash.com/photo-1469122312224-c5846569feb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3Vubnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60')"
        }
    })
        // searchInputTxt.value = '';   
}

function getDays() {
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const d = new Date();
    let day = weekday[d.getDay()];
    document.getElementById("day-dayname").innerHTML = day;
}



