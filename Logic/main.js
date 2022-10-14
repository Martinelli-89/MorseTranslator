import { renderAlphabet } from "./renderAlphabet.js";
import * as alphabets from "./Alphabets.js";
import translate from "./translator.js";



const inputToTranslate = [];

const addInput = (event) => {
    
    inputToTranslate.push(alphabets.morseAlphabet[event.target.id -1]);
    console.log(inputToTranslate)
}

let phraseInMorse = translate(inputToTranslate);


const buttons = document.querySelectorAll(".buttons__button");
const display = document.querySelector(".messageBox"); 
const translateButton = document.querySelector(".translate");

buttons.forEach (button => {
    button.addEventListener("click", addInput);
})



renderAlphabet(buttons, alphabets.englishAlphabet);
