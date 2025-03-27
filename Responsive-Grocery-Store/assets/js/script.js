let searchForm = document.querySelector(".search-bar");

document.querySelector("#searchMagnify").addEventListener("click", () => {
  searchForm.classList.toggle("show");
  if (
    userAccount.classList.contains("show") ||
    cartContainer.classList.contains("show") ||
    navbar.classList.contains("show")
  ) {
    userAccount.classList.remove("show");
    cartContainer.classList.remove("show");
    navbar.classList.remove("show");
  }
});

let userAccount = document.querySelector(".user-account");

document.querySelector("#userIcon").addEventListener("click", () => {
  userAccount.classList.toggle("show");
  if (
    searchForm.classList.contains("show") ||
    cartContainer.classList.contains("show") ||
    navbar.classList.contains("show")
  ) {
    searchForm.classList.remove("show");
    cartContainer.classList.remove("show");
    navbar.classList.remove("show");
  }
});

let cartContainer = document.querySelector(".cart-items-container");
document.querySelector("#cartIcon").addEventListener("click", () => {
  cartContainer.classList.toggle("show");
  if (
    searchForm.classList.contains("show") ||
    userAccount.classList.contains("show") ||
    navbar.classList.contains("show")
  ) {
    searchForm.classList.remove("show");
    userAccount.classList.remove("show");
    navbar.classList.remove("show");
  }
});

let navbar = document.querySelector(".nav-links");
document.querySelector("#menu-icon").addEventListener("click", () => {
  navbar.classList.toggle("show");
  if (
    searchForm.classList.contains("show") ||
    userAccount.classList.contains("show") ||
    cartContainer.classList.contains("show")
  ) {
    searchForm.classList.remove("show");
    userAccount.classList.remove("show");
    cartContainer.classList.remove("show");
  }
});

let navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((nav) => {
      nav.classList.remove("active");
    });
    link.classList.add("active");
  });
});

let iconNav = document.querySelectorAll(".icons-container div");

iconNav.forEach((links) => {
  links.addEventListener("click", () => {
    iconNav.forEach((icon) => {
      icon.classList.remove("active");
    });

    if (
      userAccount.classList.contains("show") ||
      cartContainer.classList.contains("show") ||
      navbar.classList.contains("show") ||
      searchForm.classList.contains("show")
    ) {
      links.classList.add("active");
    }
  });
});





/* swiper js script */

var swiper = new Swiper(".swiper-container", {
 loop:true,
  spaceBetween: 20,
 
  autoplay:{
    delay:7500,
    disableOnInteraction:false,
  },


  breakpoints: {
    0: {
      slidesPerView: 1,

    },
    768: {
      slidesPerView: 2,
    
    },
    1024: {
      slidesPerView: 3,
     
    },
  },
});



var swiper = new Swiper(".review-cart-container", {
 loop:true,
  spaceBetween: 20,
 
  autoplay:{
    delay:7500,
    disableOnInteraction:false,
  },


  breakpoints: {
    0: {
      slidesPerView: 1,

    },
    768: {
      slidesPerView: 2,
    
    },
    1024: {
      slidesPerView: 3,
     
    },
  },
});
