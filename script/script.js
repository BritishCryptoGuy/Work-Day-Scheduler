const jumboTime = $("#jumboTime");
const currentDayJumbo = $("#currentDay");
const container = $(".container");
const saveBtn = $(".far");
const input = $(".blockInput");
let time = 0;
let date;

//Jumbotron:
//date element added to it. Dependant on moment.js
//When data is saved SHOW appointment added to local storage via Blind jqueryUi effect. Then after a few seconds remove with fold

//Timeblocks section:
//addeventlistener to container, if target = one of the textblocks update storage for relevant.
// $(this).parent().prev().find('span').tooltip('show');

saveBtn.on("click", function (e) {
  let saveTime = $(this).parent().prev().attr("name");
  let saveInput = $(this).parent().prev().val();
  console.log(saveTime, saveInput);
  localStorage.setItem(`${saveTime}`, JSON.stringify(saveInput));
  let storage = JSON.parse(localStorage.getItem("09AM"));
});

$(document).ready(function () {
  for (block of input) {
    let blockTime = $(block).attr("name");
    let storage = JSON.parse(localStorage.getItem(blockTime));
    $(block).text(storage);
    let num = +blockTime.slice(0, 2);
    let timeNum = +time.slice(0, 2);
    console.log(num, timeNum);
    if (num < timeNum) {
      console.log("AYO");
      $(block).addClass("past");
    } else if (num === timeNum) {
      $(block).addClass("present");
    } else {
      $(block).addClass("future");
    }
  }
});
//Date and time setInterval function
setInterval(function () {
  date = moment().format("dddd, MMMM Do");
  time = moment().format("HH.mm a");
  jumboTime.text(time);
  currentDayJumbo.text(date);
  $("#currentDay:contains('December 25th')").css("color", "red"); //Christmas
}),
  500;
