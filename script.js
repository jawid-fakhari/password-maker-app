"use strict";
const btn = document.querySelector("button");
const input = document.querySelector("input");

let password;
let randomChars = [];

const mixer = function () {
  return 0.5 - Math.random();
};

const passMaker = function () {
  randomChars = [];
  const array = [
    "0123456789",
    "abcdefghijklmnopqrstuvwxyz",
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
  ];
  array.forEach((string) => {
    const char = string.split("");

    char.sort(mixer);
    randomChars.push(char.slice(-3));
  });
};

btn.addEventListener("click", () => {
  passMaker();

  const passwordMixer = randomChars.sort(mixer).flat();

  password = passwordMixer.sort(mixer).join("");

  input.value = password;
});
