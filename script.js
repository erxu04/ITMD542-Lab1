function expandCollapse() {
  let navList = document.getElementById("nav-list");
  navList.classList.toggle("hidden");

  console.log("clicked");
  console.log(navList.classList);
}