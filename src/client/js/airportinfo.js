//Show modal for the user to select the airport

const airportKey = process.env.API_AirLabs_Key;

document.addEventListener('click', event => {
    const element = event.target;
    if(element.className === 'airportinfo'){
        const modal = document.getElementById("airportmodal");
        const close = document.getElementsByClassName("close")[0];
        const save = document.getElementById("saveairport");
        modal.style.display = "block";
        close.onclick = function() {
            modal.style.display = "none";
        }

        //List of airports
        const airportUrl = `http://airlabs.co/api/v6/airports?api_key=${airportKey}`;
        getAirport(airportUrl)
        .then(function(data){
            let i = 0;
            for (i=0; i < data.response.length; i++) {
                const airportName = data.response[i].name;
                const option = document.createElement('option');
                option.innerHTML = airportName;

                document.querySelector('#airportname').append(option);
                //console.log(airportName);
            }
        })

        save.onclick = function() {
            const info = document.getElementById('airportname').value;
            document.getElementById('airportcontent').innerHTML = 'Airport information: ' + info;
            document.querySelector('#airportname').remove(option);
        }
    }
})

const getAirport = async (airportUrl) => {
    const resp = await fetch (airportUrl);
    console.log(resp);
    try {
        const data = await resp.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log ('Error', error);
    }
}

export { getAirport }


