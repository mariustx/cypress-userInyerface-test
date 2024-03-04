export function openFileDialog() {
    /*cy.get('.aut-iframe').should('be.visible').then($sizeContainer => {

        //const sizeContainer = window.frames["parent"].document.querySelector('.h-screen min-w-[728px] grid grid-cols-[auto,1fr]');
        const cypressAppFrameContainerRect = $sizeContainer[0].getBoundingClientRect();
        const marginLeft = parseFloat(getComputedStyle($sizeContainer[0]).marginLeft);

        // pixel values passed to chrome debugger protocol must be integer
        const addX = Math.ceil(cypressAppFrameContainerRect.x + marginLeft);
        const addY = Math.ceil(cypressAppFrameContainerRect.y);

        cy.get(uploadLink).first().then($element => {
            const element = $element[0];
            element.scrollIntoView();
            var rect = element.getb.getBoundingClientRect();
            cy.task("nativeClick", { x: parseInt(rect.x) + addX, y: parseInt(rect.y) + addY });
        })
    })*/


    const sizeContainer = window.frames["parent"].document.querySelector(".screenshot-height-container");
    const cypressAppFrameContainerRect = sizeContainer.getBoundingClientRect();
    const marginLeft = parseFloat(getComputedStyle(sizeContainer).marginLeft);
  
    // pixel values passed to chrome debugger protocol must be integer
    const addX = Math.ceil(cypressAppFrameContainerRect.x + marginLeft);
    const addY = Math.ceil(cypressAppFrameContainerRect.y);
  
    cy.get("input").first().then($element => {
      const element = $element[0];
      element.scrollIntoView();
      var rect = element.getBoundingClientRect();
      cy.task("nativeClick", {x: 600, y: 800 });
      //cy.task("nativeClick", {x: parseInt(rect.x) + addX, y: parseInt(rect.y) + addY });
    })

}