window.addEventListener("scroll", function () {
  // Находим все элементы с атрибутом data-parallax
  const parallaxElements = document.querySelectorAll("[data-parallax]");

  parallaxElements.forEach(function (element) {
    let scrollPosition = window.pageYOffset;
    let parallaxSpeed = parseFloat(element.getAttribute("data-parallax"));

    element.style.transform =
      "translateY(" + scrollPosition * parallaxSpeed + "px)";
  });
});
