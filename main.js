const bg = document.getElementById("bg-change");
const sc = document.getElementById("s-change");
const circle = document.querySelector(".circle");
const shape = document.querySelector(".shape");
console.log(shape);
function randomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}
bg.addEventListener("click", () => {
  circle.style.backgroundColor = randomColor();
});

let flag = false;
sc.addEventListener("click", () => {
  shape.classList.toggle("change-shape");
});
