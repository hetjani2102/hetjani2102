/* ===============================
   QUICKLOOK – SCRIPT.JS
   Bootstrap 5 Compatible
================================ */

document.addEventListener("DOMContentLoaded", function () {

  /* ===============================
     NAVBAR SEARCH TOGGLE
  ================================ */
  const searchIcon = document.querySelector(".fa-search");
  const searchInput = document.querySelector(".search-input");

  if (searchIcon && searchInput) {
    searchIcon.addEventListener("click", () => {
      searchInput.classList.toggle("active");
      searchInput.focus();
    });
  }

  /* ===============================
     HERO CAROUSEL SETTINGS
  ================================ */
  const heroCarouselEl = document.querySelector("#heroCarousel");

  if (heroCarouselEl) {
    const heroCarousel = new bootstrap.Carousel(heroCarouselEl, {
      interval: 4000,
      pause: "hover",
      ride: "carousel",
      wrap: true
    });
  }

  /* ===============================
     SKINCARE TIPS (BLOG) CAROUSEL
  ================================ */
  const blogCarouselEl = document.querySelector("#blogCarousel");

  if (blogCarouselEl) {
    new bootstrap.Carousel(blogCarouselEl, {
      interval: false,
      wrap: true
    });
  }

  /* ===============================
     HEART ICON (WISHLIST TOGGLE)
  ================================ */
  const hearts = document.querySelectorAll(".heart-icon");

  hearts.forEach(heart => {
    heart.addEventListener("click", (e) => {
      e.stopPropagation();
      heart.classList.toggle("active");

      if (heart.classList.contains("active")) {
        heart.style.background = "#000";
        heart.style.color = "#fff";
      } else {
        heart.style.background = "#fff";
        heart.style.color = "#000";
      }
    });
  });

  /* ===============================
     ADD TO CART CLICK FEEDBACK
  ================================ */
  const cartButtons = document.querySelectorAll(".add-to-cart-overlay");

  cartButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      btn.innerHTML = "✔ ADDED";
      btn.style.background = "#5E0A15";

      setTimeout(() => {
        btn.innerHTML = "ADD TO CART";
        btn.style.background = "#000";
      }, 1500);
    });
  });

});
