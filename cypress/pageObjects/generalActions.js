export const cssColor = 'color';
export const cssbackgroundColor = 'background-color';
export const cssFontSize = 'font-size';
export const cssFontWeight = 'font-weight';

export const attrib = 'href';

export function checkElementIsVisible(element) {
    cy.get(element)
        .should('be.visible');
}

export function checkElementContainsText(element, text) {
    cy.get(element)
        .contains(text);
}

export function checkColorOfElement(element, colorInRgb) {
    cy.get(element)
        .should('have.css', cssColor, colorInRgb);
}

export function checkBackgroundColorOfElement(element, colorInRgb) {
    cy.get(element)
        .should('have.css', cssbackgroundColor, colorInRgb);
}

export function checkFontSizeOfElement(element, fontSizeInPx) {
    cy.get(element)
        .should('have.css', cssFontSize, fontSizeInPx);
}

export function checkFontWeightOfElement(element, fontWeightAsNumber) {
    cy.get(element)
        .should('have.css', cssFontWeight, fontWeightAsNumber);
}

export function checkInvokeAttrib(element, link) {
    cy.get(element)
        .invoke('attr', attrib).should('eq', link);
}

export function clickOnElement(element) {
    cy.get(element)
        .click();
}

export function typeOnElement(element, text) {
    cy.get(element)
        .type(text);
}

export function clearThenTypeOnElement(element, text) {
    cy.get(element)
        .clear()
        .type(text);
}
