$(document).ready(function() {
    'use strict';

console.log(darkSkyKey);
// SAN ANTONIO LOCATION
    $.get("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/"+darkSkyKey+"/29.4241,-98.4936");


// DEGREES IN FARENHEIT

    $.get("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/"+darkSkyKey+"/37.8267,-122.4233").done(function (data) {
        console.log(data);
    });

// DEGREES IN CELCIUS
    $.get("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/"+darkSkyKey+"/37.8267,-122.4233?units=si").done(function (data) {
        console.log(data); // si is the equivalent to metric units
    });
// DATE AND TIME
    var dateObject = new Date(1551736889 * 1014);
    console.log(dateObject.toString());


// MY MARKER

var markerOptions = {
    color: '#43ffe9',
    draggable: true
};

var marker = new mapboxgl.Marker(markerOptions)
    .setLngLat([-98.4861, 29.4260])
    .addTo(map);

// END OF MARKER

// ENTER LONG AND LAT

    // mapboxgl.document.querySelector("#latitude").value = geometry.location.lat();
    // mapboxgl.document.querySelector("#longitude").value = geometry.location.lng();

// END OF ENTER LONG AND LAT

// SKYCONS
    function skycons() {
        var i,
            icons = new Skycons({
                "color" : "#FFFFFF",
                "resizeClear": true // nasty android hack
            }),
            list  = [ // listing of all possible icons
                "clear-day",
                "clear-night",
                "partly-cloudy-day",
                "partly-cloudy-night",
                "cloudy",
                "rain",
                "sleet",
                "snow",
                "wind",
                "fog"
            ];

        // loop thru icon list array
        for(i = list.length; i--;) {
            var weatherType = list[i], // select each icon from list array
                // icons will have the name in the array above attached to the
                // canvas element as a class so let's hook into them.
                elements    = document.getElementsByClassName( weatherType );

            // loop thru the elements now and set them up
            for (e = elements.length; e--;) {
                icons.set(elements[e], weatherType);
            }
        }

        // animate the icons
        icons.play();
    }

// END OF SKYCONS

function getData(){
        $.get(darkSkyKey).done(function(data) {
            var day = data.daily.data;
            var todayTemperature = data.currently.temperature;
            var html = "";
            var today = new Date().getDay();

            for (var i = 0; i < day.length - 1; i++) {
                var icon = day[i].icon;
                var dayOfWeek = (new Date((day[i].time) * 1000)).getDay();


            html += '<div class="eachDay">';

            switch (dayOfWeek) {
                case today:
                    dayOfWeek = 'Currently';
                    html += "<span id= 'temperature'>" + '<h2>' + Math.round(todayTemperature) + '&#176' + '</h2>';
                    break;
                case 0:
                    dayOfWeek = 'Sunday';
                    html += "<span id= 'temperature'>" + '<h2>' + Math.round(day[i].temperatureHigh) + '&#176' + '/' + Math.round(day[i].temperature) + '<h2>';
                    break;
                case 1:
                    dayOfWeek = 'Monday';
                    html += "<span id= 'temperature'>" + '<h2>' + Math.round(day[i].temperatureHigh) + '&#176' + '/' + Math.round(day[i].temperature) + '<h2>';
                    break;
                case 2:
                    dayOfWeek = 'Tuesday';
                    html += "<span id= 'temperature'>" + '<h2>' + Math.round(day[i].temperatureHigh) + '&#176' + '/' + Math.round(day[i].temperature) + '<h2>';
                    break;
                case 3:
                    dayOfWeek = 'Wednesday';
                    html += "<span id= 'temperature'>" + '<h2>' + Math.round(day[i].temperatureHigh) + '&#176' + '/' + Math.round(day[i].temperature) + '<h2>';
                    break;
                case 4:
                    dayOfWeek = 'Thursday';
                    html += "<span id= 'temperature'>" + '<h2>' + Math.round(day[i].temperatureHigh) + '&#176' + '/' + Math.round(day[i].temperature) + '<h2>';
                    break;
                case 5:
                    dayOfWeek = 'Friday';
                    html += "<span id= 'temperature'>" + '<h2>' + Math.round(day[i].temperatureHigh) + '&#176' + '/' + Math.round(day[i].temperature) + '<h2>';
                    break;
                case 6:
                    dayOfWeek = 'Saturday';
                    html += "<span id= 'temperature'>" + '<h2>' + Math.round(day[i].temperatureHigh) + '&#176' + '/' + Math.round(day[i].temperature) + '<h2>';

            }
            html += dayOfWeek;
            console.log(icon);

            $.get('conditions.json').done(function (weather) {

                for (var i = 0; i < weather.length; i++) {
                    console.log(icon);
                    if (icon === weather [i].condition) {
                        $('.icon').attr('src', weather[i].icon);
                    }
                }


            });


            html += "<img class = 'icon'>";
            html += "<p id='summary'>" + day[i] + '</p>';
            html += "<p id= 'humidity'>" + 'Humidity:' + Math.round(day[i].humidity * 100) + '%' + '</p>';
        }
        $('#box').html(html);

    });

}

getData();

marker.on('dragend', onDrageEnd);

// GET 3 DAYS

function click3DayButton(){
    $('#3-day').click(function (e){
        e.preventDefault();
        $('.boxes').children().hide();
        $('.boxes').children().slice(0,3).show().addClass('three-day-button-results').removeClass('today-button-results').removeClass('eachDay');
    });
}

click3DayButton();

function onDragEnd(){
    var lngLat = marker.getLngLat();
    coordinates.style.display = 'block';
    coordinates.innerHTML = 'Longitude: ' + lngLat.lng + '<br /> Latitude' +lngLat.lat;

}





})();