import { galleryItems } from './gallery-items.js';
// Change code below this line
const destructImages = destruct => {
    const { preview, original, description } = destruct;
  return `
  <div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
      />
    </a>
  </div>`
}

const galerryOfImages = document.querySelector('.gallery');
const addImages = galleryItems.map(destructImages).join('');

galerryOfImages.insertAdjacentHTML('afterbegin', addImages);

const container = document.querySelector('.gallery')

container.addEventListener('click', clicker)

// const originalImageSize = basicLightbox.create(document.querySelector('[data-source]'))
function clicker (evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== "IMG") {
  return
}



  const originalImageSize = basicLightbox.create(evt.target.dataset.source)

document.querySelector('.gallery').onclick = originalImageSize.show;

  // return originalImageSize
// console.log(originalImageSize)

}


// const originalImageSize = document.querySelector('[data-source]')
// document.querySelector('body').onclick = originalImageSize.show;

  
// console.log(originalImageSize);
