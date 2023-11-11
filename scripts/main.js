// alert("Hello world!");

// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";

// let myVariable;
// myVariable = "Bob";

// let myVariable = "Bob";
// myVariable;

// let myVariable = "Bob";
// myVariable = "Steve";

/*
Everything in between is a comment.
*/

// This is a comment

// let iceCream = "chocolate";
// if (iceCream === "chocolate") {
//   console.log("Yay, I love chocolate ice cream!");
// } else {
//   console.log("Awwww, but chocolate is my favorite…");
// }

// let myVariable = document.querySelector("h1");
// alert("hello!");

// function multiply(num1, num2) {
//   let result = num1 * num2;
//   return result;
// }

// multiply(4, 7);
// multiply(20, 20);
// multiply(0.5, 3);

// document.querySelector("html").addEventListener("click", function () {
//   alert("Ouch! Stop poking me!");
// });

// document.querySelector("html").addEventListener("click", () => {
//   alert("Ouch! Stop poking me!");
// });

// const myImage = document.querySelector("img");

// myImage.onclick = () => {
//   const mySrc = myImage.getAttribute("src");
//   if (mySrc === "images/firefox-icon.png") {
//     myImage.setAttribute("src", "images/firefox2.png");
//   } else {
//     myImage.setAttribute("src", "images/firefox-icon.png");
//   }
// }

// Select the button and heading elements from the DOM
let myButton = document.querySelector("button"); // Node environment: document is not defined but it is in browser (DOM)
let myHeading = document.querySelector("h1");

// Function to set the user name and update the heading
function setUserName() {
  // Prompt the user for their name
  const myName = prompt("Please enter your name.");

  // Check if the user entered a name
  if (myName) {
    // Save the name to localStorage
    localStorage.setItem("name", myName);
    // Update the heading with the entered name
    myHeading.textContent = `Math is so cool, ${myName}!`;
  }
}

// Check if the name is already stored in localStorage
if (!localStorage.getItem("name")) {
  // If not, prompt the user to enter their name
  setUserName();
} else {
  // If the name is already stored, retrieve it and update the heading
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Math is cool, ${storedName}`;
}

// Set the onclick event for the button to call the setUserName function
myButton.onclick = () => {
  setUserName();
};
