const searchBtn = document.getElementById('Search')
let temperature = document.getElementById('weather-temp');
let city = document.getElementById('location')
let ions = document.getElementById('weather-icon')
let dayday = document.getElementById('date-name')
let cweather = document.getElementById('weather-desc')
let dayname = document.getElementById('day-dayname')
let wrapper = document.getElementById('wrapper')
let wcond = document.getElementById('weather-cond')

getDays();

//Event Listeners
searchBtn.addEventListener('click', getWeatherDetails);

function getWeatherDetails() {
    let searchInputTxt = document.getElementById('search-input').value;
   
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${searchInputTxt}?unitGroup=metric&key=G3W2C9R5DN23VPB2HHAG4XEHJ&contentType=json`)
    .then(response => response.json())
    .then(getWeatherDetails => {
      
        city.textContent = getWeatherDetails.resolvedAddress
        ions.textContent = getWeatherDetails.days[0].icon
        temperature.textContent = `${getWeatherDetails.days[0].temp}`
        dayday.textContent = getWeatherDetails.days[0].datetime
        cweather.textContent = getWeatherDetails.days[0].description
        wcond.textContent = getWeatherDetails.days[0].humidity
        

        if (ions.textContent == 'rain') {
            wrapper.style.backgroundImage = "url('https://media1.giphy.com/media/l0Iy5fjHyedk9aDGU/200w.webp?cid=ecf05e47xomqhxpawcgaqba9m9v07z5xyzbcl96u6itr8icl&rid=200w.webp&ct=g')"
        }else if (ions.textContent == 'sunny') {
            wrapper.style.backgroundImage = "url('https://media0.giphy.com/media/xUPGcB1UzF2PH97R60/200w.webp?cid=ecf05e47jlnsllk07xqw0v37b8whnd3hlsk43rozo1kry25c&rid=200w.webp&ct=g')"
         }else if (ions.textContent == 'partly-cloudy-day') {
            wrapper.style.backgroundImage = "url('https://media4.giphy.com/media/Ns4XGIO44IICMfsQOW/200w.webp?cid=ecf05e47vtyx7lsy84t1aey5ocxmq1no4458x0eb58hdhqmr&rid=200w.webp&ct=g')"
        } else if (ions.textContent == 'clear-day') {
            wrapper.style.backgroundImage = "url('https://images.unsplash.com/photo-1502221315744-bd7ae76ef791?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xlYXIlMjBkYXl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60')"
            

        }
        else {
            // console.log('not good');
            // wrapper.style.backgroundImage = "url('https://images.unsplash.com/photo-1469122312224-c5846569feb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3Vubnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60')"
            wrapper.style.backgroundColor = 'yellow'
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



