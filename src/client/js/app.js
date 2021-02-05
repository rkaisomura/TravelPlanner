/* Global Variables */

const userName = process.env.user_geoname;
const APIWeatherBit = process.env.API_Weathebit_Key;


// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', performAction);

/* Function called by event listener */
function performAction(e){
    

    //How soon the trip is in days
    const dtDeparture = new Date (document.getElementById('date').value);
    const dtActual = new Date(); // Create a new date instance dynamically with JS
    const result = Math.floor((Date.UTC(dtDeparture.getFullYear(), dtDeparture.getMonth(), dtDeparture.getDate()) - Date.UTC(dtActual.getFullYear(), dtActual.getMonth(), dtActual.getDate())) / (1000 * 3600 * 24));
    console.log(result);

    //Geonames API: getting the latitude, longitude and country name
    const city =  document.getElementById('city').value;
 
    const baseURL = `http://api.geonames.org/searchJSON?q=${city}&maxRows=1&username=${userName}`; 
    
    getCity(baseURL)
    // New Syntax!
    .then(function (data){
        //console.log({'lat':data.geonames[0].lat, 'lng':data.geonames[0].lng, 'country':data.geonames[0].countryName});
        const lat = data.geonames[0].lat;
        const lng = data.geonames[0].lng;
        const country = data.geonames[0].countryName;
        console.log(lat, lng, country);
        //postData('/travelinfo', {'lat':data.geonames[0].lat, 'lng':data.geonames[0].lng, 'country':data.geonames[0].countryName});

        const weatherUrl = `http://api.weatherbit.io/v2.0/forecast/daily?NC&key=${APIWeatherBit}&lat=${lat}&lon=${lng}`;
        getWeather(weatherUrl)
        .then(function(weatherData){
            const temp = weatherData.data[0].temp;
            const date = weatherData.data[0].datetime;
            console.log(temp,date);
        });
    })

    
    
    /* .then (function (newData){
        updateUI();
    }); */
};

//Update UI
const updateUI = async() => {
    url = "/travelinfo";
    const req = await fetch (url);
    try {
        const info = await req.json();
        document.getElementById('date').innerHTML = info.date;
        document.getElementById('temp').innerHTML = 'Actual temperature: ' + info.temp + ' °F';
        document.getElementById('place').innerHTML = 'Place: ' + info.place;
        document.getElementById('daystrip').innerHTML =  info.city + ',' + info.countryName + 'is'  + info.result + 'days away';
    }
    catch (error) {
        console.log("error", error);
    }
}


// Async GET
const getCity = async (baseURL) => {
    const resp = await fetch (baseURL);
    console.log(resp);
    try {
        const data = await resp.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log ('Error', error);
    }
}


const getWeather = async (weatherUrl) => {
    const resp = await fetch (weatherUrl);
    console.log(resp);
    try {
        const weatherData = await resp.json();
        console.log(weatherData);
        return weatherData;
    } catch (error) {
        console.log ('Error', error);
    }
}


  
// Async POST
const postData = async (url, data = {})=>{
    const resp = await fetch(url, {
        method: 'POST', 
        credentials: 'same-origin', 
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header        
    });
    try{
        const newData = await resp.json();
        return newData;
    } catch (error) {
        console.log ('Error', error);
    }
}

export { performAction }
export { updateUI }
export { getCity }
export { postData }
export { getWeather }