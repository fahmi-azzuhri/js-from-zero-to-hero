//DOM
document.getElementById("box1").innerHTML = "Belajar Dom";

// document.getElementsByClassName("boxes")[0].innerHTML = "tes1";
// document.getElementsByClassName("boxes")[1].innerHTML = "tes2";
// document.getElementsByClassName("boxes")[2].innerHTML = "tes3";
//tapi itu ga efektif ygy

let boxes = document.getElementsByClassName("boxes");
boxes[0].innerHTML = "box1efektif";
boxes[1].innerHTML = "box2efektif";
boxes[2].innerHTML = "box3efektif";

let list = document.getElementsByTagName("li");
list[0].innerHTML = "Javascript";
list[1].innerHTML = "Vue";
list[2].innerHTML = "React";

document.getElementById("bold-me").innerHTML = " <b>BOLD ME</b> ";

//Access Document using JS
