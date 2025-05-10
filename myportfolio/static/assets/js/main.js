/**
* Template Name: MyResume
* Template URL: https://bootstrapmade.com/free-html-bootstrap-template-my-resume/
* Updated: Jun 29 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Header toggle
   */
  const headerToggleBtn = document.querySelector('.header-toggle');

  function headerToggle() {
    document.querySelector('#header').classList.toggle('header-show');
    headerToggleBtn.classList.toggle('bi-list');
    headerToggleBtn.classList.toggle('bi-x');
  }
  headerToggleBtn.addEventListener('click', headerToggle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.header-show')) {
        headerToggle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Init typed.js
   */
  const selectTyped = document.querySelector('.typed');
  if (selectTyped) {
    let typed_strings = selectTyped.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Animate the skills items on reveal
   */
  let skillsAnimation = document.querySelectorAll('.skills-animation');
  skillsAnimation.forEach((item) => {
    new Waypoint({
      element: item,
      offset: '80%',
      handler: function(direction) {
        let progress = item.querySelectorAll('.progress .progress-bar');
        progress.forEach(el => {
          el.style.width = el.getAttribute('aria-valuenow') + '%';
        });
      }
    });
  });

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });


  document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const header = document.getElementById("header");

    menuToggle.addEventListener("click", function () {
        header.classList.toggle("header-show");
    });
});



document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".header-toggle"); // Ensure correct selector
  const header = document.querySelector(".header");

  if (menuToggle && header) {
      menuToggle.addEventListener("click", function () {
          header.classList.toggle("header-show");
      });
  }
});




  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();


/**
 * hero-section slider
 */
const images = window.heroImages || [];

let currentIndex = 0;
const slider = document.getElementById("hero-slider");

function adjustImageDimensions(imageUrl, callback) {
  const img = new Image();
  img.crossOrigin = "anonymous";  // Fix added here
  img.src = imageUrl;

  img.onload = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    // Set canvas dimensions to match the slider's dimensions
    const sliderWidth = slider.offsetWidth;
    const sliderHeight = slider.offsetHeight;

    canvas.width = sliderWidth;
    canvas.height = sliderHeight;

    // Draw the image to fit the slider dimensions
    ctx.drawImage(img, 0, 0, sliderWidth, sliderHeight);
    callback(canvas.toDataURL("image/jpeg")); // Adjusted image
  };

  img.onerror = () => {
    console.error(`Failed to load image: ${imageUrl}`);
  };
}

function changeBackground() {
  if (!slider || images.length === 0) return;

  adjustImageDimensions(images[currentIndex], (adjustedImage) => {
    slider.style.backgroundImage = `url('${adjustedImage}')`;
    slider.style.backgroundSize = "cover"; // Ensure the image covers the slider
    slider.style.backgroundPosition = "center"; // Center the image
    currentIndex = (currentIndex + 1) % images.length;
  });
}

changeBackground();
setInterval(changeBackground, 5000); // Change image every 5 seconds

// Update background on window resize to maintain responsiveness
window.addEventListener("resize", changeBackground);


console.log("Main.js loaded");



/** Navbar Animation */

document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("mainNavbar");
  const navbarLinks = navbar.querySelectorAll("a, .navbar-brand"); // Select all links and brand text
  const logo = navbar.querySelector("img"); // Select the logo image
  const staticUrl = "/static/"; // Ensure static URL is set correctly

  window.addEventListener("scroll", () => {
    if (window.scrollY === 0) {
      // At the very top of the page
      navbar.classList.remove("mt-4", "border-animate");
      navbar.style.borderRadius = "0px";
      navbar.style.width = "100%"; // Reset width to full
      navbar.style.margin = "0 auto"; // Center the navbar
      navbar.style.backgroundColor = ""; // Reset to normal background color
      navbarLinks.forEach(link => link.style.color = ""); // Reset text color
      if (logo) logo.src = staticUrl + "assets/img/logo.png"; // Reset logo to original
    } else {
      // Scrolled down
      navbar.classList.add("mt-4", "border-animate");
      navbar.style.borderRadius = "40px";
      navbar.style.width = "85%"; // Reduce width
      navbar.style.margin = "0 auto"; // Keep it centered
      navbar.style.setProperty("background-color", "#0563bb", "important"); // Change background color with !important
      navbarLinks.forEach(link => link.style.color = "white"); // Force text color to white
      if (logo) logo.src = staticUrl + "assets/img/white-logo.png"; // Change logo to white version
    }
  });
});

