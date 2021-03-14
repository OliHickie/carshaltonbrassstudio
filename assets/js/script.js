function twitterFunction() {
    var x = document.getElementById("twitter-feed");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

    $(".fa-chevron-circle-down").toggleClass("flip-icon")
}

function playPhotos() {
    var photos = [
        '<img src="assets/images/play/bbp-1.jpg" alt="big brass play along image1">',
        '<img src="assets/images/play/bbp-2.jpg" alt="big brass play along image 2">',
        '<img src="assets/images/play/bbp-3.jpg" alt="big brass play along image 3">',
        '<img src="assets/images/play/bbp-4.jpg" alt="big brass play along image 4">',
        '<img src="assets/images/play/bbp-5.jpg" alt="big brass play along image 5">',
        '<img src="assets/images/play/bbp-6.jpg" alt="big brass play along image 6">',
        '<img src="assets/images/play/bbp-7.jpg" alt="big brass play along image 7">',
        '<img src="assets/images/play/bbp-8.jpg" alt="big brass play along image 8">',
        '<img src="assets/images/play/bbp-9.jpg" alt="big brass play along image 9">',
        '<img src="assets/images/play/bbp-10.jpg" alt="big brass play along image 10">',
        '<img src="assets/images/play/bbp-11.jpg" alt="big brass play along image 11">'
    ]

    function setPhotos(id, initialPhoto) {
        let photoCounter = initialPhoto;

        // $(id).append(photos[photos.length - (initialPhoto -1)]);

        function cyclePhotos() {
            ++photoCounter;
            if (photoCounter >= photos.length) {
                photoCounter = 0;
            }
            // Add photos to html 
            $(id).fadeOut(1000, function () {
                $(id).fadeIn(1000).html(photos[photoCounter]);
            });
        }
        // Set Interval between photos 
        setInterval(cyclePhotos, 12000);
    }

    setPhotos("#picOne", 1);
    setTimeout(function(){ 
        setPhotos("#picTwo", 8); 
    }, 6000);
    setTimeout(function(){ 
        setPhotos("#picThree", 5); 
    }, 9000);
    setTimeout(function(){ 
        setPhotos("#picFour", 10); 
    }, 3000);
}

function blink_text() {
    $('.fa-chevron-down').fadeOut(1000);
    $('.fa-chevron-down').fadeIn(1000);
}
setInterval(blink_text, 1000);



$(document).ready(function () {
    $("#picOne").append('<img src="assets/images/play/bbp-1.jpg" alt="big brass play along image1">');
    $("#picTwo").append('<img src="assets/images/play/bbp-7.jpg" alt="big brass play along image1">');
    $("#picThree").append('<img src="assets/images/play/bbp-4.jpg" alt="big brass play along image1">');
    $("#picFour").append('<img src="assets/images/play/bbp-9.jpg" alt="big brass play along image1">');
    playPhotos()
});