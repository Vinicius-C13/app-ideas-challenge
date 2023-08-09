const button = document.querySelector("#converter");
const form = document.querySelector("form");
const input = document.querySelector("#input");
const output = document.querySelector("#output");

function bin2dec(value) {
  let decimal = 0;
  for (let i = 0; i < value.length; i++) {
    if (Number(value[value.length - 1 - i]) == 0) {
      continue;
    } else {
      decimal = decimal + 2 ** i;
    }
  }
  return decimal;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  output.value = bin2dec(input.value);
});
