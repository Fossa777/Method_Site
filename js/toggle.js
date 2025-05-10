function toggleView() {
  const mythView = document.getElementById("myth");
  const realityView = document.getElementById("reality");
  const logoMyth = document.getElementById("logo-myth");
  const logoReality = document.getElementById("logo-reality");

  if (mythView.style.display === "none") {
    mythView.style.display = "block";
    realityView.style.display = "none";
    logoMyth.style.display = "block";
    logoReality.style.display = "none";
  } else {
    mythView.style.display = "none";
    realityView.style.display = "block";
    logoMyth.style.display = "none";
    logoReality.style.display = "block";
  }
}