/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("#excuse").innerHTML = generateExcuse();
  console.log("Hello World");
};

let generateExcuse = () => {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let what = ["eat", "pissed", "crushed", "broked"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let whoNum = Math.floor(Math.random() * who.length);
  let whatNum = Math.floor(Math.random() * what.length);
  let whenNum = Math.floor(Math.random() * when.length);

  return who[whoNum] + " " + what[whatNum] + " " + when[whenNum] + " ";
};
