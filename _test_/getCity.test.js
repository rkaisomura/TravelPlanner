//Test the city of Paris
const { getCity } = require("../src/client/js/getCity");

const userName = process.env.user_geoname;
const baseURL = `http://api.geonames.org/searchJSON?q=Paris&maxRows=1&username=${userName}`;

describe('Test Paris city', () => {
    test('It should bring the longitude, latitude and country of Paris', () => {
        getCity(baseURL)
        .then(function(data){
            expect(data.geonames[0].lat).toEqual('48.85341');
            expect(data.geonames[0].lng).toEqual('2.3488');
            expect(data.geonames[0].countryName).toEqual('France');
        });
    });
})
