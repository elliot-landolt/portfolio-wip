window.addEventListener('load', function() {
    const header = document.querySelector("#header")
    const footer = document.querySelector("#git")
    const track = document.querySelector("#image-track");

    setTimeout(() => {
        switchClasses(header, 'hidden', 'show');
        switchClasses(footer, 'custom-link-hide','custom-link-show');
        image(track)
    }, 1000);
});

function switchClasses(element, class1, class2) {
    element.classList.replace(class1,class2);
}


function image(track) {
    const images = track.getElementsByClassName("track-image")
    for (let index = 0; index < images.length; index++) {
        const image = images[index]

        setTimeout(() => {
            image.animate({
                filter: `blur(0)`,
                opacity: 1,
                transform: `translate(0%, 0%)`
            }, 
            {duration: 1200, 
                fill: "forwards"});
        }, 150 * index);
    }
}