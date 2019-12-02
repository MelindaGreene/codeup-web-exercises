"use strict";




// $( document ).ready(function() {
//     $(document).mouseenter(function(){
//         $("#M").toggle("slide");
//
//
//
//     });
//
//
//     // $( "p" ).toggleClass( "slider" );
//     $( "#M" ).toggle( "slide" );



    // $(document).ready(function() {
    //     var divWidth = $("#M").width();
    //
    //     $(".acronym").mouseenter(function(){
    //         $(this).animate({
    //             width: "300"
    //         });
    //     }).mouseleave(function(){
    //         $(this).animate({
    //             width: divWidth
    //         });
    //     });
    // });



// }

$(document).ready(function(){
    var boxWidth = $("#M").width();
    $("#M").mouseenter(function(){
        $(this).animate({
            width: "400";
         $("#M").append("indful")
        });
    }).mouseleave(function(){
        $(this).animate({
            width: boxWidth
        });
    });
});