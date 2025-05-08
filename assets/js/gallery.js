const items = [
  { type: "photo", category: "Паразиты", src: "/assets/images/gallery/parasite1.jpg", alt: "Паразит 1" },
  { type: "photo", category: "Гистология", src: "/assets/images/gallery/histo1.jpg", alt: "Гистология 1" },
  { type: "video", category: "Съёмка", src: "/assets/video/dissection.mp4", alt: "Съёмка вскрытия" }
];

function renderGallery(filterType = "all", filterCategory = "all") {
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = "";

  items
    .filter(item =>
      (filterType === "all" || item.type === filterType) &&
      (filterCategory === "all" || item.category === filterCategory)
    )
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
  const filterType = document.getElementById("filter");
  const filterCategory = document.getElementById("category");

  function updateFilters() {
    renderGallery(filterType.value, filterCategory.value);
  }

  filterType.addEventListener("change", updateFilters);
  filterCategory.addEventListener("change", updateFilters);

  updateFilters(); // initial render
});
