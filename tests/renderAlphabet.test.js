/**
 * @jest-environment jsdom
 */

import renderAlphabet from "../Logic/renderAlphabet.js";



describe("renderAlphabet", () => {
    it("Render the alphabet correctly in the div buttons", () => {
      
      document.body.innerHTML = `
        <section class="buttons">
          <div class="buttons__button" id="1"></div>
          <div class="buttons__button" id="2"></div>
          <div class="buttons__button" id="3"></div>
          <div class="buttons__button" id="4"></div>
          <div class="buttons__button" id="5"></div>
          <div class="buttons__button" id="6"></div>
          <div class="buttons__button" id="7"></div>
        </section>`;

      const mockDataToRender = ["a","b","c","d","e","f","g"];
  
      const buttons = document.querySelectorAll(".buttons__button");
      
      renderAlphabet(buttons, mockDataToRender);
      
      
      expect(document.body.innerHTML).toBe(`
        <section class="buttons">
          <div class="buttons__button" id="1">a</div>
          <div class="buttons__button" id="2">b</div>
          <div class="buttons__button" id="3">c</div>
          <div class="buttons__button" id="4">d</div>
          <div class="buttons__button" id="5">e</div>
          <div class="buttons__button" id="6">f</div>
          <div class="buttons__button" id="7">g</div>
        </section>`);
    });
});