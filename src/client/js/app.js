/* Global Variables */
const userName = process.env.user_geoname; // username of Geonames
const APIWeatherBit = process.env.API_Weathebit_Key; // API key from Weatherbit
const APIPixaBay = process.env.API_Pixabay_Key; //API key from Pixabay

// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', performAction);

/* Function called by event listener */
function performAction(e){
    
    //How soon the trip is in days
    const dtDeparture = new Date (document.getElementById('date').value);
    const yearDeparture = dtDeparture.getFullYear();
    const monthDeparture = dtDeparture.getMonth() + 1;
    const dayDeparture = dtDeparture.getDate();
    const dtActual = new Date(); // Create a new date instance dynamically with JS
    const result = Math.floor((Date.UTC(dtDeparture.getFullYear(), dtDeparture.getMonth(), dtDeparture.getDate()) - Date.UTC(dtActual.getFullYear(), dtActual.getMonth(), dtActual.getDate())) / (1000 * 3600 * 24));
    console.log(result);
    postData('/travelinfo', {result, yearDeparture, monthDeparture, dayDeparture});
    
    //Geonames API: getting the latitude, longitude and country name from the name of the city
    const city =  document.getElementById('city').value;
    if (city==='') {
        alert('Please inform a city');
    } else {
        const baseURL = `http://api.geonames.org/searchJSON?q=${city}&maxRows=1&username=${userName}`; 
        getCity(baseURL)
        .then(async (data) => {
            const lat = data.geonames[0].lat;
            const lng = data.geonames[0].lng;
            const country = data.geonames[0].countryName;
            console.log(lat, lng, country);
            await postData('/travelinfo', {lat, lng, country, city});
            
            //Weatherbit API: getting the temperature based on latitude and longitude
            const weatherUrl = `http://api.weatherbit.io/v2.0/forecast/daily?NC&key=${APIWeatherBit}&lat=${lat}&lon=${lng}`;
            getWeather(weatherUrl)
            .then(async (weatherData) => {
                //If the departure date is in a week, the temperatue is the actual one
                if (result <= 7) {
                const temp = weatherData.data[0].temp;
                console.log(temp);
                await postData('/travelinfo', {temp});
                } else {
                    const predForecast = weatherData.data[8].temp; //The predicted forecast is the 9th day based on the departure date
                    console.log(predForecast);
                    await postData('/travelinfo', {predForecast});
                }
            })
            .then (async (newData) => {
                await updateUI();
            });

            //Pixabay API: getting the image from the place
            const imageUrl = `http://pixabay.com/api/?key=${APIPixaBay}&q=${city}&image_type=photo`;
            getImage(imageUrl)
            .then(async (imageData) => {
                const image = imageData.hits[10].webformatURL;
                console.log(image);
                await postData('/travelinfo', {image});
            })
            .then (async (newData) => {
                await updateUI();
            });
        })
       /*  // Call the updateUI function with new data     
        .then (async (newData) => {
            await updateUI();
        }); */
    }
};

//Update UI
const updateUI = async() => {
    const url = '/travelinfo';
    const req = await fetch (url);
    try {
        const info = await req.json();
        document.getElementById('placeimage').innerHTML = `<img src="${info.image}" alt="Place image" id="photo">`;
        document.getElementById('place').innerHTML = 'My trip to: ' + info.city.toUpperCase();
        document.getElementById('datedeparture').innerHTML = 'Departure date: ' + info.yearDeparture + '-' + info.monthDeparture + '-' + info.dayDeparture;
        if (info.temp !== undefined){
            document.getElementById('temp').innerHTML = 'Actual temperature: ' + info.temp + '°C';
        } 
        if (info.predForecast !== undefined){
            document.getElementById('predForecast').innerHTML = 'Predicted forecast: ' + info.predForecast + '°C';
        } 
        document.getElementById('daystotrip').innerHTML =  info.city.toUpperCase() + ', ' + info.country + ' is '  + info.result + ' days away';
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

const getImage = async (imageUrl) => {
    const resp = await fetch (imageUrl);
    console.log(resp);
    try {
        const imageData = await resp.json();
        console.log(imageData);
        return imageData;
    } catch (error) {
        console.log ('Error', error);
    }
}
  
// Async POST
async function postData(url, data) {
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

//Top function
document.addEventListener('click', event => {
    const element = event.target;
    if(element.className === 'top'){
        document.documentElement.scrollTop = 0;
    }
})

export { performAction }
export { updateUI }
export { getCity }
export { postData }
export { getWeather }
export { getImage }