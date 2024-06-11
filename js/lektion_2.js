let L2_1 = document.querySelector("#L2_1");
let L2_2 = document.querySelector("#L2_2");
let L2_3 = document.querySelector("#L2_3");
let L2_4 = document.querySelector("#L2_4");
let L2_5 = document.querySelector("#L2_5");

//Opgave 1
function chekType(value){
    const type = typeof value;
    L2_1.innerHTML += `<p>${value} er af typen: ${type}</p>`;
}

// Opgave 2
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = regex.test(email);
    L2_2.innerHTML += `<p>Email is ${isValid ? 'valid' : 'invalid'}</p>`;
  }
  // Opgave 3
function checkStringLength(str) {
    const isValid = str.length >= 2;
    L2_3.innerHTML += `<p>String is ${isValid ? 'valid' : 'invalid'}</p>`;
  }

  // Opgave 4
function getRandomNumber(min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    L2_4.innerHTML += `<p>Vores tilfældige tal mellem ${min} og ${max} er: ${randomNumber}</p>`;
  }
  // Opgave 5
function getRandomRGBColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const rgbColor = `rgb(${r}, ${g}, ${b})`;
    const element = document.createElement('div');
    element.style.backgroundColor = rgbColor;
    element.style.width = '100px';
    element.style.height = '100px';
    L2_5.appendChild(element);
  }