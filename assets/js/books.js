$('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
  if (!$(this).next().hasClass('show')) {
    $(this).parents('.dropdown-menu').first().find('.show').removeClass('show');
  }
  var $subMenu = $(this).next('.dropdown-menu');
  $subMenu.toggleClass('show');


  $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
    $('.dropdown-submenu .show').removeClass('show');
  });


  return false;
});

$("#title-large").css("display", "block");


var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalButtons = document.getElementsByClassName("modal_button");
var modalContent = document.getElementById("book-modal-content");
Array.from(modalButtons).forEach( btn => {
  btn.addEventListener('click', event => {
    console.log(btn.attributes.drive_link)
    modal.style.display = "block";
    modalContent.innerHTML = "<iframe src=" + btn.attributes.drive_link.nodeValue + " width=\"100%\" height=\"100%\" allow=\"autoplay\"></iframe>";
    event.stopPropagation()
  })
})

window.onclick = function(event) {
  console.log(event.target.id)
  if (event.target.id !== "book-modal-content" && modal.style.display !== "none") {
    console.log(modal.style.display)
    modal.style.display = "none";
  }
}
