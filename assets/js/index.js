/* Set the width of the sidebar to 250px (show it) */
/*
function openNav() {
  document.getElementById("Sidepanel").style.width = "10%";
}*/

function openNav(x) {
  if (x.matches) { // If media query matches
    document.getElementById("Sidepanel").style.width = "30%";
  } else {
    document.getElementById("Sidepanel").style.width = "10%";
  }
}

var x = window.matchMedia("(max-width: 600px)");
openNav(x); // Call listener function at run time
x.addListener(openNav);
/*
const MediaQuery = window.matchMedia("(max-width: 600px)");
function openNav(x) {
  if (x.matches) { // If media query matches
    document.getElementById("Sidepanel").style.width = "30%";
  } else {
    document.getElementById("Sidepanel").style.width = "10%";
  }
}
MediaQuery.addListener(openNav);
openNav(MediaQuery);*/

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  document.getElementById("Sidepanel").style.width = "0";
}