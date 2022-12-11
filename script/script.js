//Selected items and default variables
const jumboTime = $("#jumboTime");
const currentDayJumbo = $("#currentDay");
const container = $(".container");
const saveBtn = $(".far");
const input = $(".blockInput");
const storageAlert = $("#storageNotify");
let time = 0;
let date;

//saveBtn event listener. On clicking saveBtn this saves inputted value to localStorage. Also displays alert
saveBtn.on("click", function (e) {
  storageAlert.stop().stop();
  let saveTime = $(this).parent().prev().attr("name");
  let saveInput = $(this).parent().prev().val();
  storageAlert.fadeIn(1000);
  storageAlert.fadeOut(2000);
  console.log(saveTime, saveInput);
  localStorage.setItem(`${saveTime}`, JSON.stringify(saveInput));
});

//start function, sets timeblock css dependant on time
function start() {
  storageAlert.hide();
  for (block of input) {
    let blockTime = $(block).attr("name");
    let storage = JSON.parse(localStorage.getItem(blockTime));
    $(block).text(storage);
    let num = +blockTime.slice(0, 2);
    let timeNum = +time.slice(0, 2);
    if (num < timeNum) {
      $(block).addClass("past");
    } else if (num === timeNum) {
      $(block).addClass("present");
    } else {
      $(block).addClass("future");
    }
  }
}
//On document ready start function is called
$(document).ready(function () {
  start();
});

//Date and time setInterval function
setInterval(function () {
  date = moment().format("dddd, MMMM Do");
  time = moment().format("HH.mm a");
  jumboTime.text(time);
  currentDayJumbo.text(date);
  $("#currentDay:contains('December 25th')").css("color", "red"); //Christmas
}),
  1000;
