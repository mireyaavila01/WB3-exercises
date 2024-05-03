"use strict"

const dateInput = document.getElementById("dateInput");
const displayBtn = document.getElementById("displayBtn");
const dateParagraphOutput = document.getElementById("dataParagraphOutput");

window.onload = init;

function init(){
    displayBtn.onclick = onDisplayBtnClicked;
}

function onDisplayBtnClicked(){
    let date = (dateInput.value);

   dateParagraphOutput.innerHTML = date;
}
