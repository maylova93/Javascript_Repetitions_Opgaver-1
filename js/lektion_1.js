let L1_1 = document.querySelector("#L1_1");
let L1_2 = document.querySelector("#L1_2");
let L1_3 = document.querySelector("#L1_3");
let L1_4 = document.querySelector("#L1_4");
let L1_5 = document.querySelector("#L1_5");
let L1_6 = document.querySelector("#L1_6");

// Opgave 1
function fullName(firstName, lastName) {
  let greeting = "Welcome " + firstName + " " + lastName;
  let newH3 = document.createElement("h3");
  newH3.innerText = greeting;
  L1_1.appendChild(newH3);
}

// Opgave 2

// Function Calls
fullName("Ukendt", "Person");
 function toggleClass(elementId, className){
  let element = document.getElementById(elementId)
  element.classList.toggle(className);
 }


 // Opgave 3
function toggleColor(elementId, color) {
  let element = document.getElementById(elementId);
  if (element.style.backgroundColor === color) {
    element.style.backgroundColor = '';
    alert('Color removed');
  } else {
    element.style.backgroundColor = color;
    alert('Color changed to ' + color);
  }
}

//opgave 4
let clickCount = 0;
function countClicks(elementId){
  clickCount++;
  document.getElementById(elementId).innerHTML = `<p>Clicks: ${clickCount}</p>`;
}

// Opgave 5
function wordLength(word) {
  const length = word.length;
  document.getElementById('L1_5').innerHTML += `<p>Word: ${word}, Length: ${length}</p>`;
}

// Opgave 6
function removeVowels(word) {
  const result = word.replace(/[aeiouAEIOU]/g, '');
  document.getElementById('L1_6').innerHTML += `<p>Word without vowels: ${result}</p>`;
}