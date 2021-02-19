const request = require('supertest'); //using supertest for HTTP requests/responses test
const app = require('../src/server/index'); //using the correct routes

describe('GET /travelinfo', () => {
    test('the staus should be 200', async () => {
        const response = await request(app).get("/travelinfo");
        expect(response.statusCode).toBe(200); //status OK
    });
});