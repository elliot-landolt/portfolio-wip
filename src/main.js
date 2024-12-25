// IMG TRACK

const track = document.querySelector("#image-track");

window.handleOnDown = e => {
  console.log('down')
  track.dataset.mouseDownAt = e.clientX
};

window.handleOnUp = () => {
  if(track.dataset.scrollable === "true")
    {track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage;}
}

window.handleOnMove = (e) => {
  console.log('move', track.dataset.mouseDownAt)
  if(track.dataset.mouseDownAt === "0") return;
  if(track.dataset.scrollable === "true")
    {const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX, 
    maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100,
    nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
    nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

    track.dataset.percentage = nextPercentage;

    track.animate({
      transform: `translate(${nextPercentage}%, -50%)`
    }, 
    {duration: 1200, 
      fill: "forwards"});

    for(const image of track.getElementsByClassName("track-image")){
      image.animate({
        objectPosition: `${100 + nextPercentage}% center`
      }, 
      {duration: 1200, 
        fill: "forwards"});
    }}
}

window.onmousedown = e => handleOnDown(e);
window.ontouchstart = e => handleOnDown(e.touches[0]);

window.onmouseup = e => handleOnUp(e);
window.ontouchend = e => handleOnUp(e.touches[0]);

window.onmousemove = e => handleOnMove(e);
window.ontouchmove = e => handleOnMove(e.touches[0]);

// scroll wheel
window.onwheel = e => {
  if (track.dataset.scrollable === "true")
    {const maxDelta = window.innerWidth / 2;
    let delta;
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      delta = e.deltaX * 0.1;
    } else {
      // Use deltaY for vertical scroll (if needed, you can adjust delta scaling)
      delta = e.deltaY * .05;
    }

    // Compute the new percentage position
    let nextPercentage = parseFloat(track.dataset.prevPercentage) + delta;
    nextPercentage = Math.max(Math.min(nextPercentage, 0), -100);

    // Apply the percentage and update the track's transform
    track.dataset.percentage = nextPercentage;
    track.dataset.prevPercentage = nextPercentage

    track.animate({
      transform: `translate(${nextPercentage}%, -50%)`
    }, 
    {duration: 1200, 
      fill: "forwards"});
    
    // Animate object-position of images
    for(const image of track.getElementsByClassName("track-image")){
      image.animate({
        objectPosition: `${100 + nextPercentage}% center`
      }, 
      {duration: 1200, 
        fill: "forwards"});
    }

    e.preventDefault();}
}