/* Global Variables */

const userName = process.env.user_geoname;


// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', performAction);

/* Function called by event listener */
function performAction(e){
    const city =  document.getElementById('city').value;
 
    const baseURL = `http://api.geonames.org/searchJSON?q=${city}&maxRows=1&username=${userName}`; 
    //const feelings =  document.getElementById('feelings').value;
  
    getCity(baseURL)
    // New Syntax!
    .then(function (data){
      // Add data
        console.log({'lat':data.geonames[0].lat, 'lng':data.geonames[0].lng, 'country':data.geonames[0].countryName});
        //postData('/travelinfo', {date:newDate, 'lat':data.geonames[0].lat, 'lng':data.geonames[0].lng, textFeeling:feelings});
    })

    //How soon the trip is in days
    const dtDeparture = new Date (document.getElementById('date').value);
    const dtActual = new Date(); // Create a new date instance dynamically with JS
    const result = Math.floor((Date.UTC(dtDeparture.getFullYear(), dtDeparture.getMonth(), dtDeparture.getDate()) - Date.UTC(dtActual.getFullYear(), dtActual.getMonth(), dtActual.getDate())) / (1000 * 3600 * 24));
    console.log(result);
    
    

    /* //.then (function (data){
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
        document.getElementById('content').innerHTML = 'Today I am feeling: ' + info.textFeeling;
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


  
// Async POST
const postData = async (url, data = {})=>{
    const resp = await fetch(url, {
        method: 'POST', 
        credentials: 'same-origin', 
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