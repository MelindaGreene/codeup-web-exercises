"use strict"

function addition (x, y){
    return x + y;
}

function subtraction (x,y){
    return x- y;
}


function boolean(x){
    return boolean("boolean");
}

function string(input){
    return typeof(input == "boolean")
}

function numeric(input){
    if (typeof input === "number") {
        return true
    }else {
        return false
    }
}


function isEven(input){
    if(input % 2 === 0){
        return true
    } else {
    return false
}
}