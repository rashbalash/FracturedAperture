var ESC_KEY = 27;
var ARROW_LEFT = 37;
var ARROW_RIGHT = 39;

var sources;
var gallery;
var lightBoxContent;
var lightbox;
var visibleContentContainer;

function setupGallery(gallerySources) {
    sources = gallerySources;
    gallery = document.getElementById('gallery');
    var thumbnails = populateGallery(gallery);
    addOnClickListenersToThumbnails(thumbnails);
    lightBoxContent = document.getElementById('lightBoxContent')
    lightbox = document.getElementById('lightBoxBackground');
    lightbox.addEventListener('click', lightBoxHide);
    visibleContentContainer = document.getElementById('visibleContents');
    document.addEventListener('keydown', onKeyPress);
    document.getElementById('galleryButtonLeft').addEventListener('click', arrowLeftPress);
    document.getElementById('galleryButtonRight').addEventListener('click', arrowRightPress);
    lightBoxContent.addEventListener('click', preventEventPropogationOnImageClick);
}

function populateGallery(gallery) {
    var galleryHTML = "";    
    for (var j = 0; j < sources.length; j++) { 
        galleryHTML = galleryHTML +
                `<div class="thumbnailWrapper">
                    <div class="thumbnail"
                        style="background-image: url(${sources[j].thumbnailSource})">
                    </div>
                    <div class="textContainer" 
                        data-openSource="${sources[j].fullSource}">
                        <p class="videoTitle">${sources[j].title || ''}</p>
                    </div>
                </div>`; 
    }
    gallery.innerHTML = galleryHTML;
    return document.getElementsByClassName('thumbnailWrapper');
}

function addOnClickListenersToThumbnails(thumbnails) {
    for (var index = 0; index < thumbnails.length; index++) {
        thumbnails[index].addEventListener('click', lightBoxReveal);
    }
}

// Event Listeners
function lightBoxReveal(event) {
    event = event || window.event;
    visibleContentContainer.classList.add("backgroundBlur");
    lightbox.classList.remove("hidden");
    var fullSource = event.target.getAttribute("data-openSource");
    lightBoxContent.setAttribute("src", fullSource); 
}

function lightBoxHide() {
    visibleContentContainer.classList.remove("backgroundBlur");
    lightBoxBackground.classList.add("hidden");
    lightBoxContent.setAttribute("src", "");
}

function arrowLeftPress(event) {
    for (var indexLeft = 0; indexLeft < sources.length; indexLeft++) {
        if (lightBoxContent.getAttribute("src") === sources[indexLeft].fullSource) {
            lightBoxContent.setAttribute("src", sources[indexLeft-1].fullSource);
            event.stopPropagation();
            break;   
        }
    }
}

function arrowRightPress(event) {
    for (var indexRight = 0; indexRight < sources.length; indexRight++) {
        if (lightBoxContent.getAttribute("src") === sources[indexRight].fullSource) {
            lightBoxContent.setAttribute("src", sources[indexRight+1].fullSource);
            event.stopPropagation();
            break;   
        }
    }
}

function onKeyPress(event) {
    event = event || window.event;
    if (event.keyCode == ESC_KEY) {
        lightBoxHide();
    } else if (event.keyCode == ARROW_LEFT) {
        arrowLeftPress();
    } else if (event.keyCode == ARROW_RIGHT) {
        arrowRightPress();
    }
};

function preventEventPropogationOnImageClick(event) {
    event.stopPropagation();
}