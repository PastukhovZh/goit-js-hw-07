import { galleryItems } from './gallery-items.js';
// Change code below this line

const destructImages = destruct => {
    const { preview, original, description } = destruct;
  return `
    <a class="gallery__item" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" />
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
    
    
    let lightboxImg = new SimpleLightbox('.gallery__item');
lightboxImg.on('show.simplelightbox');
    // console.log(evt.target.nodeName)


//   const originalImageSize = basicLightbox.create(`  
//         <img width="1280" height="850" src="${evt.target.dataset.source}">/`);

// document.querySelector('.gallery').onclick = originalImageSize.show;

}

container.addEventListener('click', clickToOpenOriginalImg)