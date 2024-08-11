// script.js
let display = document.getElementById('number');

let currentValue = localStorage.getItem('currentValue') ? parseInt(localStorage.getItem('currentValue')) : 0;






function changeNumber(amount) {
    currentValue += amount;
    updateDisplay();
    saveToLocalStoragebc();
}

function surprise() {
    let randomValue = Math.floor(Math.random() * 5) + 1;
    currentValue += randomValue;
    updateDisplay();
    saveToLocalStoragebc();
}

function saveToLocalStoragebc() {
    localStorage.setItem('currentValue', currentValue);
}

function updateDisplay() {
    display.textContent = currentValue;
}

let display2 = document.getElementById('numberT');
let currentValue2 = localStorage.getItem('currentValue2') ? parseInt(localStorage.getItem('currentValue2')) : 0;


function changeTime(amount) {
    currentValue2 += amount;
    updateDisplay2();
    saveToLocalStoragebt();
}

function surprise2() {
    let randomValuet = Math.floor(Math.random() * 5) + 1;
    currentValue2 += randomValuet;
    updateDisplay2();
    saveToLocalStoragebt();
}
function saveToLocalStoragebt() {
    localStorage.setItem('currentValue2', currentValue2);
}

function updateDisplay2() {
    display2.textContent = currentValue2;
}

// script.js
let rdisplay = document.getElementById('rnumber');
let rcurrentValue = localStorage.getItem('rcurrentValue') ? parseInt(localStorage.getItem('rcurrentValue')) : 0;



function rchangeNumber(amount) {
    rcurrentValue += amount;
    rupdateDisplay();
    saveToLocalStoragerc();
}

function rsurprise() {
    let randomValue = Math.floor(Math.random() * 5) + 1;
    rcurrentValue += randomValue;
    rupdateDisplay();
    saveToLocalStoragerc();
}

function saveToLocalStoragerc() {
    localStorage.setItem('rcurrentValue', rcurrentValue);
}


function rupdateDisplay() {
    rdisplay.textContent = rcurrentValue;
}

let rdisplay2 = document.getElementById('rnumberT');
let rcurrentValue2 = localStorage.getItem('rcurrentValue2') ? parseInt(localStorage.getItem('rcurrentValue2')) : 0;

function rchangeTime(amount) {
    rcurrentValue2 += amount;
    rupdateDisplay2();
    saveToLocalStoragert();
}

function rsurprise2() {
    let randomValuet = Math.floor(Math.random() * 5) + 1;
    rcurrentValue2 += randomValuet;
    rupdateDisplay2();
    saveToLocalStoragert();
}
function saveToLocalStoragert() {
    localStorage.setItem('rcurrentValue2', rcurrentValue2);
}

function rupdateDisplay2() {
    rdisplay2.textContent = rcurrentValue2;
}



updateDisplay();
updateDisplay2();
rupdateDisplay();
rupdateDisplay2();


// Function to play sound
function playSound() {
    const audio = new Audio('cash.mp3'); // Replace with your sound file path
    audio.play();
}

// Add event listeners to all buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', playSound);
});


// script.js

