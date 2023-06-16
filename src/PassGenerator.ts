import { OptionsType } from "./App";

const Uppercase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const Lowercase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const Numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const Specials = ["!", "@", "#", "$", "%", "^", "&", ")", "*", "("];

const randomIntFromInterval = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const shuffleString = (str: string) => {
  let shuffledString = "";
  const stringArray = str.split("");

  while (stringArray.length > 0) {
    const randomIndex = Math.floor(Math.random() * stringArray.length);
    shuffledString += stringArray.splice(randomIndex, 1);
  }

  return shuffledString;
};

export const generatePassword = (
  length: number,
  { upper, lower, number, special }: OptionsType
) => {
  let arr: string[] = [];
  let password = "";
  if (upper) {
    arr = [...arr, ...Uppercase];
    password += Uppercase[randomIntFromInterval(0, 25)];
  }

  if (lower) {
    arr = [...arr, ...Lowercase];
    password += Lowercase[randomIntFromInterval(0, 25)];
  }

  if (number) {
    arr = [...arr, ...Numbers];
    password += Numbers[randomIntFromInterval(0, 9)];
  }

  if (special) {
    arr = [...arr, ...Specials];
    password += Specials[randomIntFromInterval(0, 9)];
  }

  for (let i = 4; i < length; i++) {
    password += arr[randomIntFromInterval(0, arr.length - 1)];
  }
  password = shuffleString(password);
  return password;
};
