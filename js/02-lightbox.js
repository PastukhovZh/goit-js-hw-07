import { galleryItems } from './gallery-items.js';
// Change code below this line

const destructImages = destruct => {
    const { preview, original, description } = destruct;
  return `
    <a class="gallery__item" href="${original}">
          <img class="gallery__image" src="${preview}" title="${description}" />
    </a>` 
}
const galerryOfImages = document.querySelector('.gallery');
const addImages = galleryItems.map(destructImages).join('');
const container = document.querySelector('.gallery');
galerryOfImages.insertAdjacentHTML('afterbegin', addImages);


function clickToOpenOriginalImg (evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== "IMG") {
  return
  }
    
 new SimpleLightbox('.gallery__item').on('show.simplelightbox');
}

container.addEventListener('click', clickToOpenOriginalImg)