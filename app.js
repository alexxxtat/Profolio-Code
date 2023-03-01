let nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
  //   console.log(window.scrollY);
  if (window.scrollY == 0) {
    nav.style.boxShadow = "";
  } else {
    nav.style.boxShadow = "0 10px 6px -6px #777";
  }
});
