import { renderAlphabet } from "./renderAlphabet.js";
import * as alphabets from "./Alphabets.js";

const buttons = document.querySelectorAll(".buttons__button");

renderAlphabet(buttons, alphabets.englishAlphabet);