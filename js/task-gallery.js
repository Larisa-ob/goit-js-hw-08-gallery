import galleryItems from "./gallery-items.js";

const refs = {
  galleryItem: document.querySelector(".gallery__item"),
  gallery: document.querySelector(".js-gallery"),
  largeImage: document.querySelector(".js-large-image"),
};
const array = [...galleryItems];
console.log(array);
const elementGalleryRef = (array) =>
  array.forEach((element) => {
    /* создаем img класса gallery__image */
    const img = document.createElement("img");
    img.classList.add("gallery__image");
    /*img.src = element.original;*/
    img.setAttribute("data-source", element.preview);
    img.alt = element.description;
    /*  создаем ссылку А класса  gallery__link*/
    const link = document.createElement("a");
    link.classList.add("gallery__link");
    link.href = element.preview;
    link.appendChild(img);
    /* создаем єлемент li    */
    const list = document.createElement("li");
    list.classList.add("gallery__item");
    console.log(list);
    list.appendChild(link);
  });
elementGalleryRef(array);

/*refs.gallery.addEventListener("click", onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const imageRef = event.target;
  const largeImageURL = imageRef.dataset.source;
  console.log(imageRef);
  console.log(largeImageURL);
  setLargeImageSrc(largeImageURL);
}

function setLargeImageSrc(url) {
  refs.largeImage.src = url;
}*/
