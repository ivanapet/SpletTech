$(document).ready(function () {
  const hamburger = $(".nav-toggler");
  const headWrapper = $(".header-wrapper");
  const nav = $(".navigation");
  let width = screen.width;

  hamburger.click(function () {
    headWrapper.toggleClass("nav-open");
  });

  if (width >= 1200 && nav.css("display", "none")) {
    nav.css("display", "flex");
  }

  if (width >= 1200 && headWrapper.hasClass("nav-open")) {
    headWrapper.removeClass("nav-open");
  }
});
