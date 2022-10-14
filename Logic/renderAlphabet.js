export const renderAlphabet = ( buttonsArray, alphabetToRenderArray) => {

    buttonsArray.forEach ( button => {

        button.innerHTML = alphabetToRenderArray[button.id - 1];
    })

}

export default renderAlphabet;