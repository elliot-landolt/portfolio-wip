const track = document.querySelector("#image-track")
const images = Array.from(track.getElementsByClassName("track-image"));

for (const image of track.getElementsByClassName("track-image")) {
  image.addEventListener("click", function() {
    clickImage(image)
  });
};

function clickImage(image) {
  const currentScale = getComputedStyle(image).transform;

  if (currentScale === 'matrix(1, 0, 0, 1, 0, 0)') {
    track.dataset.scrollable = "false";
    expandImage(image);
  }
  else {
    shrinkImage(image);
    track.dataset.mouseDownAt = 0
    track.dataset.scrollable = "true";
  }
}

function expandImage(image) {
  const images = Array.from(track.getElementsByClassName("track-image"));
  images.forEach(pic => {
    const xMove = getMove(pic)
    if (image === pic) {
      pic.animate({
        transform: 'scale(1.2)',
        },{
        duration: 800,
        fill: 'forwards',
        })
      track.animate({
        transform: `translate(${-xMove}%, -50%)`
        }, {
        duration: 800, 
        fill: 'forwards'});
    }
  });
  images.forEach((pic, index) => {
    if (pic !== image) {
      setTimeout(() => {
        pic.animate(
          {
            opacity: 0,
            transform: `translate(0%, 50%)`,
          },
          {
            duration: 800,
            fill: 'forwards',
          }
        );
      }, index * 300);
    }
  });
}

function shrinkImage(image) {
  const images = Array.from(track.getElementsByClassName("track-image"));
  images.forEach(pic => {
    const xMove = getMove(pic)
    if (image === pic) {
      pic.animate({
        transform: 'scale(1)',
        },{
        duration: 800,
        fill: 'forwards',
        })
      track.animate({
        transform: `translate(${track.dataset.percentage}%, -50%)`
        }, {
        duration: 800, 
        fill: 'forwards'});
    }
  });
  images.forEach((pic, index) => {
    if (pic !== image) {
      setTimeout(() => {
        pic.animate(
          {
            opacity: 1,
            transform: `translate(0%, 0%)`,
          },
          {
            duration: 800,
            fill: 'forwards',
          }
        );
      }, index * 300);
    }
  });
}

function getMove(pic) {
  switch(pic['id']) {
    case 'elliot1':
      return ((100/6) * 1);
    case 'elliot2':
      return ((100/6) * 2);
    case 'elliot3':
      return ((100/6) * 3);
    case 'elliot4':
      return ((100/6) * 4);
    case 'elliot5':
      return ((100/6) * 5);
    case 'elliot6':
      return ((100/6) * 6); 
    default:
      return 100;
  }
}