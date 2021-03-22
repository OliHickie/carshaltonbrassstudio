function twitterFunction() {
    var x = document.getElementById("twitter-feed");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

    $(".fa-chevron-circle-down").toggleClass("flip-icon")
}



// function blink_text() {
//     $('.fa-chevron-down').fadeOut(1000);
//     $('.fa-chevron-down').fadeIn(1000);
// }
// setInterval(blink_text, 1000);



