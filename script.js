
"use strict";
const openBtn = document.querySelector(`#open-btn`);
const closeBtn = document.querySelector(`#close-btn`);
const sideBar = document.querySelector(`.links`);
const overlay = document.querySelector(`.overlay`);
const links = document.querySelectorAll(`.link`);
const sections = document.querySelectorAll(`.section`);

openBtn.addEventListener(`click`, function() {
    sideBar.classList.toggle(`show-side-bar`);
    if (sideBar.classList.contains(`show-side-bar`)) {
        overlay.style.display = 'block' 
    } 
});

closeBtn.addEventListener(`click`, function() {
    sideBar.classList.remove(`show-side-bar`)
    overlay.style.display = 'none' 
})

overlay.addEventListener(`click`, function() {
    sideBar.classList.remove(`show-side-bar`)
    overlay.style.display = 'none' 
})

links.forEach(link => {
  link.addEventListener(`click`, function() {
    sideBar.classList.remove(`show-side-bar`);
    overlay.style.display = 'none' 
  })
})


//initialise swiper
const swiper = new Swiper('.slide-wrapper', {
  loop: true,
  spaceBetween: 10,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
    grabCursor: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  //making it responsive
  breakpoints: {
    0: {
        slidesPerView: 1
    },
     768: {
        slidesPerView: 2
    },
     1024: {
        slidesPerView: 3
    }
  }

});


//creating reveal on scroll animation
const sectionObserver = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add(`show`)
  })
}, {
  threshold: 0.2
})

sections.forEach(section => sectionObserver.observe(section))

