// let mybutton = document.querySelector(".scroll-btn");

// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }

// function topFunction() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }

const hamburger = document.querySelector(".hamburger")
const navbar = document.querySelector(".navbar")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  navbar.classList.toggle("active")
})

document.querySelector(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active")
  navbar.classList.remove("active")
}))