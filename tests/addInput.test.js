/**
 * @jest-environment jsdom
 */

 import addInput from "../Logic/addInput.js";

 describe("addInput", () => {
     it("Add input to global variable", () => {

       const spy = jest.spyOn (inputToTranslate, 'getData'); 
       
       document.body.innerHTML = `
         <section class="buttons">
           <div class="buttons__button" id="1" onclick="addInput()">a</div>
         </section>`;

        addInput();
   
        expect(spy[spy.length-1]).toBe("*-");
     });
})