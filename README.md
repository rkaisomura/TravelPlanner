# Travel Planner
This project requires to build a travel application that allows user plan your trip providing an specific city and departure date.

## Prerequisites of the project:
* JavaScript;
* HTML/CSS;
* Webpack;
* Express server;
* Use at least 3 APIs.

## Goal of this project:
* Obtain a desired trip location and date from the user
* Displays weather and an image of the location using information from external APIs
* Add additional functionality and customization

## Used APIs:
* Geonames
* Weatherbit
* Pixabay

## Additional functionalities:
* Flight info - user is able to write the flight information (Ex.: FL1012).
* Print this page - user can print the current page.
* Packing List - user can add a packing list for the trip.

## How to use it:
* Trip Information
    1. Input a city name in the field "My trip to (city): "
    1. Select a date in the field "Departure date: "
    1. Click on the "Generate" button
    1. Trip information will be displayed with a photo of the city, city name, departure date, actual temperature and count how many days is away the present day

* Flight info
    1. Click on "+flight info" button
    1. A showmodal is opened
    1. Input the flight information in the text field
    1. Click on "Save" button
    1. The flight information will be displayed at "Trip Information"

* Print this page
    1. Click on "Print this page"
    1. A print window is opened
    1. Select the print configurations (for example: destination, pages, layout, color)
    1. Click on "Print" button

* Packing List
    1. Input an item in the text field
    1. Click on "Add" button
    1. An item will be displayed below with a "remove" button
    1. The user can remove an specific item, clicking on "remove" button 

## Code's Particularities
* Three variables were created in order to start the project. They are defined in .env file and used for the APIs.
    * user_geoname: this variable is the username for Geonames API
    * API_Weathebit_Key: this is the API key for Weatherbit
    * API_Pixabay_Key: API key variable for Pixabay