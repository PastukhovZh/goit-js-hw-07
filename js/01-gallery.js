import { galleryItems } from './gallery-items.js';
// Change code below this line
const destructImages = destruct => {
    const { preview, original, description } = destruct;
  return `
  <div class="gallery__item" >
    <a class="gallery__link" href="">
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
const container = document.querySelector('.gallery');

galerryOfImages.insertAdjacentHTML('afterbegin', addImages);

function clickToOpenOriginalImg (evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== "IMG") {
  return
}
  const originalImageSize = basicLightbox.create(`  
        <img width="1280" height="850" src="${evt.target.dataset.source}">/`);

document.querySelector('.gallery').onclick = originalImageSize.show;

}


container.addEventListener('click', clickToOpenOriginalImg)