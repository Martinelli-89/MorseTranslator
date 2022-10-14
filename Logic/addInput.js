import * as alphabets from "./Alphabets.js";


export const addInput = (event) => {
    
    inputToTranslate.push(alphabets.morseAlphabet[event.target.id -1]);

}

export default addInput;