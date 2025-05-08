const images = [
  "/assets/images/gallery/image1.jpg",
  "/assets/images/gallery/image2.jpg"
];

const gallery = document.getElementById("gallery");

images.forEach(src => {
  const img = document.createElement("img");
  img.src = src;
  img.alt = "Изображение галереи";
  img.className = "gallery-image";
  gallery.appendChild(img);
});
