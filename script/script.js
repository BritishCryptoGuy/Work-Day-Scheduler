const jumboTime = document.querySelector("#jumboTime");
const currentDayJumbo = document.querySelector("#currentDay");
const container = document.querySelector(".container");
let time = 0;

//Jumbotron:
//date element added to it. Dependant on moment.js

//Timeblocks section:
//addeventlistener to container, if target = one of the textblocks update storage for relevant.

console.log(time);
container.addEventListener("click", function (e) {
  console.log(e);
  console.log(e.target);
});

setInterval(function () {
  time = moment().format("hh.mm a");
  jumboTime.textContent = time;
}),
  1000;
