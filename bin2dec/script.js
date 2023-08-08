const button = document.querySelector("#converter");
const form = document.querySelector("form");
const input = document.querySelector("#input");
const output = document.querySelector("#output");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(input.value);
});
