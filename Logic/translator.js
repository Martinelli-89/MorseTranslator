import * as alphabets from "./Alphabets.js";

export const translate = (phraseToTranslate) => {


    const morsePhrase = [];
    
    phraseToTranslate.forEach(letter => {
        const index = alphabets.englishAlphabet.indexOf(letter);
        morsePhrase.push(alphabets.morseAlphabet[index]);
    });

    const phraseToString = morsePhrase.join("");

    return phraseToString;
}

export default translate;