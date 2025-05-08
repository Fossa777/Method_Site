const items = [
  { type: "photo", src: "/assets/images/gallery/image1.jpg", alt: "Фото 1" },
  { type: "photo", src: "/assets/images/gallery/image2.jpg", alt: "Фото 2" },
  { type: "video", src: "/assets/video/intro.mp4", alt: "Видео 1" }
];

function renderGallery(filter = "all") {
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = "";

  items
    .filter(item => filter === "all" || item.type === filter)
    .forEach(item => {
      if (item.type === "photo") {
        const img = document.createElement("img");
        img.src = item.src;
        img.alt = item.alt;
        img.className = "gallery-image";
        gallery.appendChild(img);
      } else if (item.type === "video") {
        const video = document.createElement("video");
        video.src = item.src;
        video.controls = true;
        video.className = "gallery-video";
        gallery.appendChild(video);
      }
    });
}

document.addEventListener("DOMContentLoaded", () => {
  renderGallery();

  const filterSelect = document.getElementById("filter");
  filterSelect.addEventListener("change", () => {
    renderGallery(filterSelect.value);
  });
});
