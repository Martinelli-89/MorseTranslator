import { englishAlphabet } from "./Alphabets";



export const renderAlphabet = ( buttonsArray, alphabetToRenderArray) => {

    buttonsArray.forEach ( button => {

        button.innerText = alphabetToRenderArray[button.id - 1];

    })

}

module.exports = renderAlphabet;