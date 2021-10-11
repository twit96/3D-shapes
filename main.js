// toggle color scheme functionality
var slider = document.querySelector(".slider");
slider.onclick = function() {
  document.documentElement.classList.toggle("inverted");
}


// give nav a link to each section
var nav = document.querySelector("nav");
var scenes = document.getElementsByClassName("scene");
var page_link;
for (var i=0; i<scenes.length; i++) {
  page_link = document.createElement("a");
  page_link.href = "javascript:;";
  page_link.classList.add("c-" + i);
  page_link.innerHTML = scenes[i].querySelector("h2").innerHTML;
  page_link.onclick = navScroll;
  nav.appendChild(page_link);
  scene_counter = scenes[i].querySelector("h3");
  scene_counter.innerHTML = (i+1) + "/" + scenes_num;
}
// scroll body to each section on clicked link
var body = document.getElementsByTagName("body")[0];
var target_scroll;
function navScroll(e) {
  target_scroll = window.innerHeight * (e.target.classList[0].split("-")[1]);
  body.scrollTop = target_scroll;
}


// dynamically change nav links' active class
body.addEventListener("scroll", function() {
  requestAnimationFrame(updateActiveLink);
});

var slide;
var curr_slide;
var nav_links;
function updateActiveLink() {
  curr_slide = Math.floor(body.scrollTop / window.innerHeight);
  if (curr_slide != slide) {
    slide = curr_slide;
    nav_links = document.querySelectorAll("nav > a");
    for (var i=0; i<nav_links.length; i++) {
      nav_links[i].classList.remove("active");
    }
    document.querySelector(".c-" + slide).classList.add("active");
  }
}


// give each scene a number in bottom right
var scenes = document.getElementsByClassName("scene");
var scenes_num = scenes.length;
var scene_counter;
for (var i=0; i<scenes_num; i++) {
  scene_counter = scenes[i].querySelector("h3");
  scene_counter.innerHTML = (i+1) + "/" + scenes_num;
}

// give each shape a random animation delay
var shapes = document.getElementsByClassName("shape");
for (var i=0; i<shapes.length; i++) {
  shapes[i].style.animationDelay = (Math.random() * 20) * -1 + "s";
}

// give all shape faces a random background color
var faces = document.getElementsByClassName("face");
for (var i=0; i<faces.length; i++) {
  faces[i].style.background =
    "rgba(" +
      (Math.random() * 255) + ", " +
      (Math.random() * 255) + ", " +
      (Math.random() * 255) + ", " +
    "0.8)";
}


// Carousel
var carousel = document.getElementsByClassName("carousel")[0];
var carousel_face_size = getComputedStyle(carousel).getPropertyValue('--width').replace("vmin", "");
var carousel_faces = carousel.getElementsByClassName("face");
var carousel_face_count = carousel_faces.length;

var translate_z;
var rotate_y;

for (var i=0; i<carousel_faces.length; i++) {
  translate_z = Math.round((carousel_face_size/2)/Math.tan(Math.PI/carousel_face_count));
  rotate_y = (360/carousel_face_count) * i;
  carousel_faces[i].style.transform =
    "rotateY(" + rotate_y +"deg) " +
    "translateZ("+ translate_z +"vmin)";
}


// Pyramid
// give all shape triangles a random background color
var triangles = document.getElementsByClassName("triangle");
for (var i=0; i<triangles.length; i++) {
  triangles[i].style.borderBottomColor =
    "rgba(" +
      (Math.random() * 255) + ", " +
      (Math.random() * 255) + ", " +
      (Math.random() * 255) + ", " +
    "0.8)";
}
