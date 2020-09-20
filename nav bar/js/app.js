function showNav() {
  let icon = document.querySelector("#icon");
  icon.addEventListener("click", toggleNavDisplay);
}

function closeNavOnLinkClick() {
  let links = document.querySelectorAll("nav > ul > li > a");

  links.forEach((link) => link.addEventListener("click", toggleNavDisplay));
}

showNav();
closeNavOnLinkClick();

function toggleNavDisplay() {
  let nav = document.querySelector("nav");
  let navId = nav.id;

  showOrHideNav(nav, navId);
}

function showOrHideNav(nav, e) {
  if (!nav.classList.contains(`show-nav-${e}`)) {
    nav.classList.remove(`hide-nav-${e}`);
    nav.classList.add(`show-nav-${e}`);
  } else {
    nav.classList.remove(`show-nav-${e}`);
    nav.classList.add(`hide-nav-${e}`);
  }
}

/* --- options --- */

function options() {
  let options = document.querySelectorAll(".options");
  let nav = document.querySelector("nav");

  options.forEach((option) =>
    option.addEventListener("click", () => {
      options.forEach((option) => (option.style.color = "white"));

      // change button innerText
      let icon = (document.querySelector("#icon").innerText = "open");

      let opt = option.innerText.toLowerCase();

      option.style.color = "lightgreen";

      nav.id = opt;

      let arr = ["top", "right", "bottom", "left"];

      arr.forEach((ar) => {
        nav.classList.remove(`hide-nav-${ar}`);
        nav.classList.remove(`show-nav-${ar}`);
      });
    })
  );
}

options();

/* --- click button --- */

function clickBtn() {
  let icon = document.querySelector("#icon");

  icon.addEventListener("click", () => {
    if (icon.innerHTML === "open") icon.innerHTML = "close";
    else {
      icon.innerHTML = "open";
    }
  });
}

clickBtn();
