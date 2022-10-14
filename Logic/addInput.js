import * as alphabets from "./Alphabets.js";


export const addInput = (event) => {
    debugger;
    inputToTranslate.push(alphabets.morseAlphabet[event.target.id -1]);

}

export default addInput;