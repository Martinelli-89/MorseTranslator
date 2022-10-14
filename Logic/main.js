import { renderAlphabet } from "./renderAlphabet.js";
import * as alphabets from "./Alphabets.js";


const inputToTranslate = [];


const addInput = (event) => {
    
    inputToTranslate.push(alphabets.morseAlphabet[event.target.id -1]);
    console.log(inputToTranslate);
}


const buttons = document.querySelectorAll(".buttons__button");

buttons.forEach (button => {
    button.addEventListener("click", addInput);
})


renderAlphabet(buttons, alphabets.englishAlphabet);