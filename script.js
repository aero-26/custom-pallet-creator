"use strict";

// Choose body
const body = document.querySelector("body");

// Color selector

const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const color3 = document.querySelector(".color3");
const color4 = document.querySelector(".color4");
const color5 = document.querySelector(".color5");

// Color Info
const info1 = document.querySelector(".info1");
const info2 = document.querySelector(".info2");
const info3 = document.querySelector(".info1");

// Random color maker
function randomNum() {
  return Math.round(Math.random() * 255);
}

// Conversion in HEX
const calcHex = (num) => {
  let d1 = convertHEX(Math.trunc(num / 16));
  let d2 = convertHEX(Math.trunc(num % 16));

  function convertHEX(num) {
    if (num === 10) {
      return "A";
    }
    if (num === 11) {
      return "B";
    }
    if (num === 12) {
      return "C";
    }
    if (num === 13) {
      return "D";
    }
    if (num === 14) {
      return "E";
    }
    if (num === 15) {
      return "F";
    } else {
      return num;
    }
  }

  return `${d1}${d2}`;
};

// Set color
const set1 = () => {
  let r = randomNum();
  let g = randomNum();
  let b = randomNum();
  let rgb = `rgb(${r}, ${g}, ${b})`;
  color1.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  let hex = `#` + calcHex(r) + calcHex(g) + calcHex(b);
  console.log(rgb, hex);
};

const set2 = () => {
  let r = randomNum();
  let g = randomNum();
  let b = randomNum();
  let rgb = `rgb(${r}, ${g}, ${b})`;
  color2.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  let hex = `#` + calcHex(r) + calcHex(g) + calcHex(b);
  console.log(rgb, hex);
};

const set3 = () => {
  let r = randomNum();
  let g = randomNum();
  let b = randomNum();
  let rgb = `rgb(${r}, ${g}, ${b})`;
  color3.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  let hex = `#` + calcHex(r) + calcHex(g) + calcHex(b);
  console.log(rgb, hex);
};

const set4 = () => {
  let r = randomNum();
  let g = randomNum();
  let b = randomNum();
  let rgb = `rgb(${r}, ${g}, ${b})`;
  color4.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  let hex = `#` + calcHex(r) + calcHex(g) + calcHex(b);
  console.log(rgb, hex);
};

const set5 = () => {
  let r = randomNum();
  let g = randomNum();
  let b = randomNum();
  let rgb = `rgb(${r}, ${g}, ${b})`;
  color5.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  let hex = `#` + calcHex(r) + calcHex(g) + calcHex(b);
  console.log(rgb, hex);
};

// Adding the spacebar functionality
body.addEventListener("keyup", (e) => {
  if (e.code === "Space") {
    // Push the color Code
    set1();
    set2();
    set3();
    set4();
    set5();
  }
});

set1();
set2();
set3();
set4();
set5();
