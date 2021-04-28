$.when(
  setTimeout(function () {
    $('.loader_bg').fadeToggle();
  }, 800))
.then(function() {
  $('#main-title').addClass("animate__animated animate__backInDown");
  $('#down-button').addClass("animate__animated animate__bounceInDown")
});

$(document).ready(function() {
  // Check if element is scrolled into view
  function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }
  // If element is scrolled into view, fade it in
  $(window).scroll(function() {
    $('.scroll-animations .row').each(function() {
      if (isScrolledIntoView(this) === true) {
        $(this).css("opacity", "1");
        $(this).addClass('animate__zoomIn');
      }
    });
  });
});