const galleryItems = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];

const gallery = galleryItems
  .map(
    (item) => `
<li class="gallery__item">
  <a
    class="gallery__link"
    href="${item.original}"
  >
    <img
      class="gallery__image"
      src="${item.original}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</li>`
  )
  .join("");
const list = document.querySelector(".js-gallery");
const modalImage = document.querySelector(".lightbox__image");
list.innerHTML = gallery;

list.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.nodeName === "Ul") {
    return;
  }
  document.querySelector(".js-lightbox").classList.add("is-open");
  const item = event.target.closest(".gallery__item");
  const imageTag = item.firstElementChild.firstElementChild;
  modalImage.src = imageTag.dataset.source;
  modalImage.alt = imageTag.alt;
});

document
  .querySelector(".gallery-arrow-right")
  .addEventListener("click", (event) => {
    if (modalImage.alt === galleryItems[galleryItems.length - 1].description) {
      modalImage.src = galleryItems[0].original;
      modalImage.alt = galleryItems[0].description;
    } else {
      const nextEl = document.querySelector(`[src="${modalImage.src}"]`)
        .parentNode.parentNode.nextElementSibling.firstElementChild
        .firstElementChild;

      modalImage.src = nextEl.src;
      modalImage.alt = nextEl.alt;
    }
  });

  document
  .querySelector(".gallery-arrow-left")
  .addEventListener("click", (event) => {
    if (modalImage.alt === galleryItems[0].description) {
      modalImage.src = galleryItems[galleryItems.length - 1].original;
      modalImage.alt = galleryItems[galleryItems.length - 1].description;
    } else {
      const nextEl = document.querySelector(`[src="${modalImage.src}"]`)
        .parentNode.parentNode.previousElementSibling.firstElementChild
        .firstElementChild;

      modalImage.src = nextEl.src;
      modalImage.alt = nextEl.alt;
    }
  });

document
  .querySelector(".lightbox__button")
  .addEventListener("click", (event) =>
    document.querySelector(".js-lightbox").classList.remove("is-open")
  );

document
  .querySelector(".lightbox__overlay")
  .addEventListener("click", (event) =>
    document.querySelector(".js-lightbox").classList.remove("is-open")
  );

document.addEventListener("keydown", (event) => {
  if (event.code === "Escape") {
    document.querySelector(".js-lightbox").classList.remove("is-open");
  } else if (event.code === "ArrowRight") {
    if (modalImage.alt === galleryItems[galleryItems.length - 1].description) {
      modalImage.src = galleryItems[0].original;
      modalImage.alt = galleryItems[0].description;
    } else {
      const nextEl = document.querySelector(`[src="${modalImage.src}"]`)
        .parentNode.parentNode.nextElementSibling.firstElementChild
        .firstElementChild;

      modalImage.src = nextEl.src;
      modalImage.alt = nextEl.alt;
    }
  } else if (event.code === "ArrowLeft") {
    if (modalImage.alt === galleryItems[0].description) {
        modalImage.src = galleryItems[galleryItems.length - 1].original;
        modalImage.alt = galleryItems[galleryItems.length - 1].description;
      } else {
        const nextEl = document.querySelector(`[src="${modalImage.src}"]`)
          .parentNode.parentNode.previousElementSibling.firstElementChild
          .firstElementChild;
  
        modalImage.src = nextEl.src;
        modalImage.alt = nextEl.alt;
      }
  }
});
