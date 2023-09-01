const avatar = document.querySelector("#navbarDropdownMenuLink");
const navMenu = document.querySelector("#nav-menu");

avatar.onclick = function () {
  navMenu.classList.toggle("hidden");
};

const sortWrapper = document.querySelector(".sort-wrapper");
const sortMenu = document.querySelector("#sort-menu");

sortWrapper.onclick = function () {
  sortMenu.classList.toggle("hidden");
};

document.addEventListener("click", function (event) {
  const isClickInsideMenu = navMenu.contains(event.target);
  const isClickOnAvatar = avatar.contains(event.target);
  const isClickOnSort = sortWrapper.contains(event.target);
  const isClickOnMenu = sortMenu.contains(event.target);

  if (!isClickInsideMenu && !isClickOnAvatar) {
    navMenu.classList.add("hidden");
  }

  if (!isClickOnSort && !isClickOnMenu) {
    sortMenu.classList.add("hidden");
  }
});

const postButton = document.querySelector(".post-button");
const closeButton = document.querySelector(".close-button");
const postForm = document.querySelector(".post-form");
const textArea = document.querySelector(".post-text");
const postOverlay = document.querySelector(".post-overlay");

postButton.onclick = function () {
  postOverlay.classList.remove("hidden");
  textArea.focus();
  document.querySelector("body").style.overflow = "hidden";
};

postOverlay.onclick = function (event) {
  if (!postForm.contains(event.target)) {
    hideOverlay();
  }
};

closeButton.onclick = () => hideOverlay();

function hideOverlay() {
  postOverlay.classList.add("hidden");
  document.querySelector("body").style.overflow = "auto";
}
