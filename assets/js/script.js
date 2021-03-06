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
      { scrollTop: $("#" + this.id + "-section").offset().top - 100 },
      1
    ),
      $(".navbar-collapse").collapse("hide");
  });
}

function contactScroll() {
  $(".contact-button").click(function () {
    $("html,body").animate(
      { scrollTop: $("#contact-section").offset().top - 100 },
      1
    );
  });
}

$(document).ready(function () {
  navbarScroll();
  contactScroll();

  $('.btt-link').click(function(e) {
    window.scrollTo(0,0)
  })
});
