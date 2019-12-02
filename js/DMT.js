"use strict";


function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}



const p = new Promise((resolve, reject) => {
   resolve(3);
});

p.then(result => console.log(result));
p.catch(error => console.log('An error occured!'));