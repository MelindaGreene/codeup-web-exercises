"use strict"

console.log('Hello from JavaScript!');

alert("Welcome to my Website!");

var userInput = prompt("What is your favorite color?");
alert(" Great " + userInput + " is also my favorite color! ");





var moviedays= 3;
var lilmerm = 3;
var brobear = 5;
var herc = 1;


var lilmerm= prompt("How many days did you rent Little Mermaid?" );
var brobear = prompt("How many days did you rent Brother Bear?");
var herc = prompt("How many days did you rent Hercules?");
alert("You rented movies at the rate of $3 a day for $" + (parseInt(lilmerm) + parseInt(brobear)+ parseInt(herc) * (moviedays)));

// or another option
// var lmrental = parseInt(prompt("How many days did you rent Little Mermaid?"));
// alert("cool, your total comes out to $" + (lmrental) * 3 + ".");



// My long ass option
// var google= 400;
// var amazon = 380;
// var facebook=350;
// var googhour = 6;
// var zonhour = 4;
// var fbhour = 10;
//
// var google = prompt("How many hours did you work at Google?");
// var amazon = prompt("How many hours did you work at Amazon?");
// var facebook= prompt("How many hour did ou work at Facebook?");
//
//

var googPay = parseInt(prompt("Working for Google pays $400/hr. How many hours of work was done at Google?")) *400;
var fbHours = parseInt(prompt("Working for Google pays $350/hr. How many hours of work was done at Facebook?"));
var zonHours = parseInt(prompt("Working for Google pays $380/hr. How many hours of work was done at Amazon?"));
alert("Congrats Looks like your going home with: $") + Googpay