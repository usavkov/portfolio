const iHeight = window.innerHeight;
const scrollBtn = document.querySelector("#scroll-up");

/* Skroll up*/

scrollBtn.addEventListener("click", (ev) => {
  if (window.pageYOffset > 0) {
    window.scrollTo({
      top: 0, 
      left: 0, 
      behavior: 'smooth'
    });
  }
});

window.addEventListener("scroll", (ev) => {
  if (window.pageYOffset > iHeight) {
    $("#scroll-up svg").fadeIn(200, () => {
      $("#scroll-up svg").css({ display: "block" }); // document.querySelector('#scroll-up svg').style.display = 'block';
    });
  } else {
    $("#scroll-up svg").fadeOut(200, () => {
      $("#scroll-up svg").css({ display: "none" }); // document.querySelector('#scroll-up svg').style.display = 'none';
    });
  }
});

/*----------*/

/* Mobile nav-menu */

$('a.icon-menu').click((ev) => {
    $('.mobile-menu').toggleClass('hidden');
    $('body').toggleClass('cutted');
})

$('.mobile-menu > .nav-menu > li').click((ev) => {
    $('.mobile-menu').toggleClass('hidden');
    $('body').toggleClass('cutted');
})