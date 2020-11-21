import galleryItems from "./gallery-items.js";

const refs = {
  galleryItem: document.querySelector(".gallery__item"),
  gallery: document.querySelector(".js-gallery"),
  modalInput: document.querySelector(".lightbox"),
  largeImage: document.querySelector(".lightbox-image"),
};

const array = [...galleryItems];
const elementGalleryRef = (array) =>
  array.forEach((element) => {
    /* создаем img класса gallery__image */
    const img = document.createElement("img");
    img.classList.add("gallery__image");
    img.src = element.preview;
    img.setAttribute("data-source", element.original);
    img.alt = element.description;
    /*  создаем ссылку А класса  gallery__link*/
    const link = document.createElement("a");
    link.classList.add("gallery__link");
    link.href = element.original;
    link.appendChild(img);
    /* создаем єлемент li    */
    const list = document.createElement("li");
    list.classList.add("gallery__item");
    console.log(list);
    list.appendChild(link);
    refs.gallery.append(list);
  });
elementGalleryRef(array);
/* кликаем на галлерею*/
refs.gallery.addEventListener("click", onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }
  const imageRef = event.target;
  const largeImageURL = imageRef.dataset.source;
  console.log(largeImageURL);
  setLargeImageSrc(largeImageURL);

  /*обавляем класс на div[class=lightbox*/
  const modalOn = refs.modalInput;
  modalOn.classList.add("is-open");
  console.log(refs.modalInput);
}
function setLargeImageSrc(url) {
  console.dir(refs.target);
  refs.gallery__image.src = url;
}
