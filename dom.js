//DOM
let box1 = (document.getElementById("box1").innerHTML = "Belajar Dom");

// document.getElementsByClassName("boxes")[0].innerHTML = "tes1";
// document.getElementsByClassName("boxes")[1].innerHTML = "tes2";
// document.getElementsByClassName("boxes")[2].innerHTML = "tes3";
//tapi itu ga efektif ygy

let boxes = document.getElementsByClassName("boxes");
boxes[0].innerHTML = "box1";
boxes[1].innerHTML = "box2";
boxes[2].innerHTML = "box3";

let list = document.getElementsByTagName("li");
for (let i = 0; i < list.length; i++) {
  list[i].innerHTML = "react js";
  list[i].style.color = "red";
}

document.getElementById("bold-me").innerHTML = " <b>BOLD ME</b> ";

//append element
let newEl = document.createElement("p");
let textEl = document.createTextNode("aku adalah teks di dalam tag p");

let insertEl = newEl.appendChild(textEl);
document.getElementById("meDiv").appendChild(insertEl);

//remove element

let divEl = document.getElementById("thisDiv");
let pEl = document.getElementById("mrP");
divEl.removeChild(pEl);

//set attribute
let attr = document.querySelector("a");
attr.setAttribute("href", "https://www.google.com");
document.querySelector("a").removeAttribute("href");

//manipulating css
var elCss = document.getElementById("here");
elCss.style.fontSize = "25px";
elCss.style.color = "#38FF10";
elCss.style.background = "#adadad";

let body = document.getElementsByTagName("body");
body.style.background = "#eaeaea";
