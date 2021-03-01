//Clicking on Cancel button at Trip Information
document.addEventListener('click', event => {
    const element = event.target;
    if(element.className === 'cancel'){
        //Clear the city and departure date fields
        document.getElementById('date').value = '';
        document.getElementById('city').value = '';

        //Clear the Trip Information data from UI
        document.getElementById('placeimage').innerHTML = '';
        document.getElementById('place').innerHTML = '';
        document.getElementById('datedeparture').innerHTML = '';
        document.getElementById('temp').innerHTML = '';
        document.getElementById('predForecast').innerHTML = '';
        document.getElementById('daystotrip').innerHTML =  '';
        document.getElementById('cancel').innerHTML = '';
        document.getElementById('flightcontent').innerHTML = '';
        
        //Clear the data at '/travelinfo'
        //Based on https://medium.com/@9cv9official/what-are-get-post-put-patch-delete-a-walkthrough-with-javascripts-fetch-api-17be31755d28
        fetch('http://localhost:8081/travelinfo/', {
            method: 'DELETE'
        })
    }
})