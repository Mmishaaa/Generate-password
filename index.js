const passwordButton = document.querySelector(".password");
const passwordField = document.querySelector("#password");
const copyImage = document.querySelector(".copy-img");

const length = 12; 
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()-_+=[]{}|:;'<>,.?/";

const allChars = upperCase + lowerCase + number + symbol;

function copyPassword() {
  passwordField.select();
  document.execCommand("copy");
}
passwordButton.addEventListener("click", () => {
  let password = '';
  // password += upperCase[Math.floor(Math.random() * upperCase.length)];
  // password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  // password += number[Math.floor(Math.random() * number.length)];
  // password += symbol[Math.floor(Math.random() * symbol.length)];

  while(length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordField.value = password;
});

copyImage.addEventListener("click", copyPassword);