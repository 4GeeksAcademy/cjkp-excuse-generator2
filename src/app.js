/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
const who = ["My Dog", "My Landlord", "My Granma", "My Mothe in Law"];
const action = ["Ate", "Destroyer", "Burnt", "Sold", "Lost"];
const what = ["My Homework", "My Car", "My House", "My Rent Money", "My Phone"];
const when = ["Today", "Yesterday", "Last Month", "Last Year", "Last Week"];

function randomIndex(len) {
  return Math.floor(Math.random() * len);
}

window.onload = function() {
  //write your code here
  console.log("Hello MDC-25");

  // create a randon excuse
  const indexWho = randomIndex(who.length);
  const indexAction = randomIndex(action.length);
  const indexWhat = randomIndex(what.length);
  const indexWhen = randomIndex(when.length);
  //..
  const excuse =
    who[indexWho] +
    " " +
    action[indexAction] +
    " " +
    what[indexWhat] +
    " " +
    when[indexWhen];

  //change the HTML page to show the randon excuse
  document.querySelector("div").innerText = excuse;
};
