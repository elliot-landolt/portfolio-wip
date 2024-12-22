// MODAL

// Get the modal
var modal = document.getElementById("expand-modal");

var images = document.querySelectorAll("track-image");
var modalImg = document.getElementById("modal-image");
var captionText = document.getElementById("modal-caption");

images.forEach(function(img) {
    img.addEventListener("click", function() {
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt; // write the code here to paste the correct text
    }
)});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// remove modal if on outside
modal.addEventListener("click", function(e) {
  if (e.target === modal) {
    modal.style.display = "none";
}});