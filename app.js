document.addEventListener('DOMContentLoaded', cityWeather)

function weatherDataFetch(city) {
    var key = 'feabf737c0396f2a57dddb353e18684c';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
        .then(function(resp) {
            returnresp.json()
        }) //Convert data to json
        .then(function(data) {
            console.log(data);
        })
        .catch(function(){
            //catch any errors
        });
}

function cityWeather(e) {
    weatherDataFetch( 'Tallinn');
}