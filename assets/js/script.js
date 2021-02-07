function twitterFunction() {
    var x = document.getElementById("twitter-feed");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function openForm() {
    document.getElementById("form-display").style.display = "block";
}

function closeForm() {
    document.getElementById("form-display").style.display = "none";
}