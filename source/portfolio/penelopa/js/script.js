"use strict";!function(){var t=document.querySelector(".nav-button--open"),e=document.querySelector(".nav-button--close"),s=document.querySelector(".main-nav__list");t.addEventListener("click",function(){s.classList.remove("site-list--close"),t.classList.add("nav-button--hide"),e.classList.remove("nav-button--hide")}),e.addEventListener("click",function(){s.classList.add("site-list--close"),e.classList.add("nav-button--hide"),t.classList.remove("nav-button--hide")})}();