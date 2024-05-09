"use strict";

window.onload = init;


const button = document.getElementById("displayBtn")

function init() {

    button.onclick = onDisplayBtnClicked;
}

function onDisplayBtnClicked() {
    let date = document.getElementById("dateInput").value;
    let output = document.getElementById("dateOutput");

    output.innerHTML = date.toString();
  
}

onDisplayBtnClicked();