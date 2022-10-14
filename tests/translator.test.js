/**
 * @jest-environment jsdom
 */

 import translator from "../Logic/translator.js";



 describe("translator", () => {
    it("renders translation on screen", () => {
 
        const mockPhraseToTranslate = ["i"," ","h","a","t","e"," ","t","e","s","t","i","n","g","!"];

        document.body.innerHTML = `
        <section class="messageBox">
        </section>`;

        translator(mockPhraseToTranslate);

        const answer = document.querySelector(".messageBox");
        
        expect(answer.innerHTML).toBe("**************--********-****-**-*--*-*-*--")})
    });