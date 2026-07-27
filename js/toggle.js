function toggleBlock(id) {
  const block = document.getElementById(id);
  if (!block) return;
  const first = block.querySelector('.toggle-content.first');
  const second = block.querySelector('.toggle-content.second');
  const logoMyth = document.getElementById("logo-myth");
  const logoReality = document.getElementById("logo-reality");
  if (first && second) {
    first.style.display = first.style.display === 'none' ? 'block' : 'none';
logoMyth.style.display = logoMyth.style.display === 'none' ? 'block' : 'none';
    second.style.display = second.style.display === 'none' ? 'block' : 'none';
logoReality.style.display = logoReality.style.display === 'none' ? 'block' : 'none';
  }
}