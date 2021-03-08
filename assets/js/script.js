function twitterFunction() {
    var x = document.getElementById("twitter-feed");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function playPhotos() {
    var photos = [
        '<img src="assets/images/play/bbp-1.jpg" alt="picOne">',
        '<img src="assets/images/play/bbp-2.jpg" alt="picOne">',
        '<img src="assets/images/play/bbp-3.jpg" alt="picOne">',
        '<img src="assets/images/play/bbp-4.jpg" alt="picOne">',
        '<img src="assets/images/play/bbp-5.jpg" alt="picOne">',
        '<img src="assets/images/play/bbp-6.jpg" alt="picOne">'
    ]

    function setPhotos(id, initialPhoto) {
        let photoCounter = initialPhoto;

        $(id).append(photos[photos.length - (initialPhoto -1)]);

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
        setInterval(cyclePhotos, 8000);
    }

    setPhotos("#picOne", 2);
    setPhotos("#picTwo", 3);
    setPhotos("#picThree", 4);
    setPhotos("#picFour", 5);
}

function blink_text() {
    $('.fa-chevron-down').fadeOut(1000);
    $('.fa-chevron-down').fadeIn(1000);
}
setInterval(blink_text, 1000);



$(document).ready(function () {
    playPhotos()
});