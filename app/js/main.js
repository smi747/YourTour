window.addEventListener("scroll", bringmenu);

function bringmenu() {
  if (document.documentElement.scrollTop > 450) {
    document.getElementById("header-menu").classList.add("show");
    document.getElementById("header-space").style.display = "block";
  } else {
    document.getElementById("header-menu").classList.remove("show");
    document.getElementById("header-space").style.display = "none";
  }
}
