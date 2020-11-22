import galleryItems from "./gallery-items.js";

const refs = {
  galleryItem: document.querySelector(".gallery__item"),
  gallery: document.querySelector(".js-gallery"),
  modalInput: document.querySelector(".lightbox"),
  backdropRef: document.querySelector(".lightbox__overlay"),
  largeImage: document.querySelector("img[class='lightbox__image']"),
  backmodal: document.querySelector(".lightbox__button"),
};
refs.gallery.addEventListener("click", onGalleryClick);

const array = [...galleryItems];
/*Создаем галлерею*/
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
    list.appendChild(link);
    refs.gallery.append(list);
  });
elementGalleryRef(array);
/* кликаем на галлерею и переходим в модальное окно*/
function onGalleryClick(event) {
  event.preventDefault();
  refs.backmodal.addEventListener("click", onBackModalClick);
  refs.backdropRef.addEventListener("click", onBackModalClick);
  window.addEventListener("keydown", onPressEscape);

  if (event.target.nodeName !== "IMG") {
    return;
  }
  const imageRef = event.target;
  const largeImageURL = imageRef.dataset.source;
  setLargeImageSrc(largeImageURL);

  /*добавляем класс на div[class=lightbox*/
  const modalOn = refs.modalInput;
  modalOn.classList.add("is-open");
}
/* Функция ссылки на большой рисунок */
function setLargeImageSrc(url) {
  const refmodal = refs.largeImage;
  refmodal.src = url;
}
function onCloseModal() {
  window.removeEventListener("keydown", onPressEscape);
  refs.backmodal.removeEventListener("click", onBackModalClick);
  refs.backdropRef.removeEventListener("click", onBackModalClick);
  refs.modalInput.classList.remove("is-open");
  getLargeImageSrc();
}
/* Функция очистки ссылки на большой рисунок */
function getLargeImageSrc() {
  const refmodal = refs.largeImage;
  refmodal.src = "";
}
/* Функция 'клика на кнопку закрытия или оверлей*/
function onBackModalClick(event) {
  if (event.target === event.currentTarget) {
    onCloseModal();
  }
}
/* Функция нажатия ESC*/
function onPressEscape(event) {
  if (event.code === "Escape") {
    onCloseModal();
  }
}
