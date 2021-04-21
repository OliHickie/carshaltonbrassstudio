function twitterFunction() {
  var x = document.getElementById("twitter-feed");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  $(".fa-chevron-circle-down").toggleClass("flip-icon");
}

function navbarScroll() {
  $(".navbar-item").click(function () {
    $("html,body").animate(
      {scrollTop: $("#" + this.id + "-section").offset().top - 125,}
    ),
    $(".navbar-collapse").collapse("hide");
  });
}

$(document).ready(function () {
  navbarScroll();
});
