"use strict";

// Choose body
const body = document.querySelector("body");

// Color selector

const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const color3 = document.querySelector(".color3");
const color4 = document.querySelector(".color4");
const color5 = document.querySelector(".color5");

// Targeting Lock
const lock = document.querySelectorAll(".lock");

// Color HEX code
const p = document.querySelectorAll("p");

// Random color maker
function randomNum() {
  return Math.round(Math.random() * 255);
}

// Conversion in HEX from RGB
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
  color1.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  let hex = `#` + calcHex(r) + calcHex(g) + calcHex(b);
  p[0].textContent = hex;
};

const set2 = () => {
  let r = randomNum();
  let g = randomNum();
  let b = randomNum();
  color2.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  let hex = `#` + calcHex(r) + calcHex(g) + calcHex(b);
  p[1].textContent = hex;
};

const set3 = () => {
  let r = randomNum();
  let g = randomNum();
  let b = randomNum();
  color3.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  let hex = `#` + calcHex(r) + calcHex(g) + calcHex(b);
  p[2].textContent = hex;
};

const set4 = () => {
  let r = randomNum();
  let g = randomNum();
  let b = randomNum();
  color4.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  let hex = `#` + calcHex(r) + calcHex(g) + calcHex(b);
  p[3].textContent = hex;
};

const set5 = () => {
  let r = randomNum();
  let g = randomNum();
  let b = randomNum();
  color5.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  let hex = `#` + calcHex(r) + calcHex(g) + calcHex(b);
  p[4].textContent = hex;
};

// Adding the color change functionality
body.addEventListener("keyup", (e) => {
  if (e.key === "c") {
    checkLock();
  }
});

document.querySelector(".ch-color").addEventListener("click", () => {
  checkLock();
});

const checkLock = () => {
  if (!lock[0].checked) {
    set1();
  }
  if (!lock[1].checked) {
    set2();
  }
  if (!lock[2].checked) {
    set3();
  }
  if (!lock[3].checked) {
    set4();
  }
  if (!lock[4].checked) {
    set5();
  }
};

// Copying function
for (let i = 0; i < 5; i++) {
  p[i].addEventListener("click", () => {
    let z = p[i].textContent;
    navigator.clipboard.writeText(z);
  });
}

set1();
set2();
set3();
set4();
set5();
