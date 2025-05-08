async function loadHTML(id, file) {
  const el = document.getElementById(id);
  if (el) {
    const response = await fetch(file);
    if (response.ok) {
      const text = await response.text();
      el.innerHTML = text;
    } else {
      el.innerHTML = "<p>Ошибка загрузки " + file + "</p>";
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadHTML("header", "/header.html");
  loadHTML("footer", "/footer.html");
});
