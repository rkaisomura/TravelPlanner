const { getAirport } = require("../src/client/js/airportinfo");

const airportKey = process.env.API_AirLabs_Key;
const airportUrl = `http://airlabs.co/api/v6/airports?api_key=${airportKey}`;

describe('Test airport name', () => {
    test('It should bring the first airport', () => {
        getAirport(airportUrl)
        .then(function(data){
            expect(data.response[0].name).toEqual('Anaa');
        });
    });
})
