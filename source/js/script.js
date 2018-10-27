"use strict";

(function () {
  var topButton = document.querySelector(".top-button");

  window.addEventListener("scroll", function () {
    topButton.classList.remove("top-button--hidden");
    if (!window.pageYOffset) {
      topButton.classList.add("top-button--hidden");
    }
  });
}());
