const track = document.querySelector("#image-track")
const text = track.getElementsByClassName("#image-text")

for (const image of track.getElementsByClassName("track-image")) {
  image.addEventListener("click", function() {
    console.log('click', image);
    image.animate({
      transform: `translate(0%, 50%)`,
      opacity: `0`,
    }, {duration: 1000, fill:"forwards"});
    // add text animation here



  });
};