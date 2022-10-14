/**
 * @jest-environment jsdom
 */

 import translator from "../Logic/translator.js";



 describe("translator", () => {
    it("renders translation on screen", () => {
 
        const mockPhraseToTranslate = ["i"," ","h","a","t","e"," ","t","e","s","t","i","n","g","!"];

        translator(mockPhraseToTranslate);

        const answer = translator(mockPhraseToTranslate);
        
        expect(answer).toBe("**************--********-****-**-*--*-*-*--")})
    });