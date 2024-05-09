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

// Adding the color change functionality to the change icon
document.querySelector(".ch-color").addEventListener("click", () => {
  checkLock();
});

// Conditions to change color
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

// Setting Local Storage for Colors

// For color 1
document.querySelector("#lock1").addEventListener("click", () => {
  if (lock[0].checked) {
    localStorage.setItem("hex1", p[0].textContent);
  }
  if (!lock[0].checked) {
    localStorage.removeItem("hex1");
  }
});

// For color 2
document.querySelector("#lock2").addEventListener("click", () => {
  if (lock[1].checked) {
    localStorage.setItem("hex2", p[1].textContent);
  }
  if (!lock[1].checked) {
    localStorage.removeItem("hex2");
  }
});

// For color 3
document.querySelector("#lock3").addEventListener("click", () => {
  if (lock[2].checked) {
    localStorage.setItem("hex3", p[2].textContent);
  }
  if (!lock[2].checked) {
    localStorage.removeItem("hex3");
  }
});

// For color 4
document.querySelector("#lock4").addEventListener("click", () => {
  if (lock[3].checked) {
    localStorage.setItem("hex4", p[3].textContent);
  }
  if (!lock[3].checked) {
    localStorage.removeItem("hex4");
  }
});

// For color 5
document.querySelector("#lock5").addEventListener("click", () => {
  if (lock[4].checked) {
    localStorage.setItem("hex5", p[4].textContent);
  }
  if (!lock[4].checked) {
    localStorage.removeItem("hex5");
  }
});

// Checking for local storage

if (localStorage.getItem("hex1")) {
  color1.style.backgroundColor = localStorage.getItem("hex1");
  p[0].textContent = localStorage.getItem("hex1");
  lock[0].checked = true;
}
if (!localStorage.getItem("hex1")) {
  set1();
}

if (localStorage.getItem("hex2")) {
  color2.style.backgroundColor = localStorage.getItem("hex2");
  p[1].textContent = localStorage.getItem("hex2");
  lock[1].checked = true;
}
if (!localStorage.getItem("hex2")) {
  set2();
}

if (localStorage.getItem("hex3")) {
  color3.style.backgroundColor = localStorage.getItem("hex3");
  p[2].textContent = localStorage.getItem("hex3");
  lock[2].checked = true;
}
if (!localStorage.getItem("hex3")) {
  set3();
}

if (localStorage.getItem("hex4")) {
  color4.style.backgroundColor = localStorage.getItem("hex4");
  p[3].textContent = localStorage.getItem("hex4");
  lock[3].checked = true;
}
if (!localStorage.getItem("hex4")) {
  set4();
}

if (localStorage.getItem("hex5")) {
  color5.style.backgroundColor = localStorage.getItem("hex5");
  p[4].textContent = localStorage.getItem("hex5");
  lock[4].checked = true;
}
if (!localStorage.getItem("hex5")) {
  set5();
}

// Copying function
for (let i = 0; i < 5; i++) {
  p[i].addEventListener("click", () => {
    let z = p[i].textContent;
    navigator.clipboard.writeText(z);
  });
}
