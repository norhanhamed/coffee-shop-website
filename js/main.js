
//toggle mobile menue visibity
const menueOpenBotton= document.getElementById("menue-open-button");
const menueCloseBotton= document.getElementById("menue-close-button");
//open menue 
menueOpenBotton.addEventListener("click", ()=>{
    document.body.classList.toggle("show-mobile-menue")
})
//close menue
menueCloseBotton.addEventListener("click", ()=>{
    document.body.classList.toggle("show-mobile-menue")
})

// ********** swiper slider
const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  spaceBetween: 25,
  grabCursor: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }, 
  //responsive breakpoints
  breakpoints:{
    0:{
      slidesPerView:1
    },
     768:{
      slidesPerView:2
    },
    1024:{
      slidesPerView:3
    },

  }

});


const navLinks = document.querySelectorAll(".nav-menue .nav-link");
// close menue when the nav link is clicked
navLinks.forEach(link => {
  link.addEventListener("click", ()=> menueOpenBotton.click())
  
});

