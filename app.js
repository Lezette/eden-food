// Get the modal
var modal = document.getElementById("myModal");
var imModal = document.getElementById("img-modal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var img = document.getElementById("myImg");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}
img.onclick = function() {
    imModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
  if (event.target === imModal) {
    imModal.style.display = "none";
    // document.getElementById("img-cover").style.display = 'none';
  }
}