const startPageUrl = "https://userinyerface.com/";

const logoIcon = ".logo__icon";
const firstParagraph = ".view__content > :nth-child(2) > :nth-child(1)";
const secondParagraph = ".view__content > :nth-child(2) > :nth-child(2)";
const startButton = ".start__button";
const lastParagraph = ":nth-child(4) > p";
const startLink = ".start__link";

const cssColor = 'color';
const cssbackgroundColor = 'background-color';
const cssFontSize = 'font-size';
const cssFontWeight = 'font-weight';

const attrib = 'href';

export function visitStartPageUrl() {
    let currentUrl;

    cy.visit(startPageUrl)
        .then(() => {
            // Get the current URL and store it in the variable
            cy.url().then((url) => {
                currentUrl = url;
            });
        });

    // Now 'currentUrl' contains the URL you visited
    // You can use it later in your test
}

function checkElementIsVisible(element) {
    cy.get(element)
        .should('be.visible');
}

function checkElementContainsText(element, text) {
    cy.get(element)
        .contains(text)
}

function checkColorOfElement(element, cssColor, colorInRgb) {
    cy.get(element)
        .should('have.css', cssColor, colorInRgb)
}

function checkBackgroundColorOfElement(element, cssbackgroundColor, colorInRgb) {
    cy.get(element)
        .should('have.css', cssbackgroundColor, colorInRgb)
}

function checkFontSizeOfElement(element, cssFontSize, fontSizeInPx) {
    cy.get(element)
        .should('have.css', cssFontSize, fontSizeInPx)
}

function checkFontWeightOfElement(element, cssFontWeight, fontWeightAsNumber) {
    cy.get(element)
        .should('have.css', cssFontWeight, fontWeightAsNumber)
}

function checkInvokeAttrib(element, link) {
    cy.get(element)
        .invoke('attr', attrib).should('eq', link);
}

function clickOnElement(element) {
    cy.get(element)
        .click();
}

export function verifyLogoIsVisible() {
    checkElementIsVisible(logoIcon);
}

export function verifyFirstParagraphIsCorrect(text, colorInRgb, fontSizeInPx, fontWeightAsNumber) {
    checkElementContainsText(firstParagraph, text);
    checkColorOfElement(firstParagraph, cssColor, colorInRgb);
    checkFontSizeOfElement(firstParagraph, cssFontSize, fontSizeInPx);
    checkFontWeightOfElement(firstParagraph, cssFontWeight, fontWeightAsNumber);
}

export function verifySecondParagraphIsCorrect(text, colorInRgb, fontSizeInPx, fontWeightAsNumber) {
    checkElementContainsText(secondParagraph, text);
    checkColorOfElement(secondParagraph, cssColor, colorInRgb);
    checkFontSizeOfElement(secondParagraph, cssFontSize, fontSizeInPx);
    checkFontWeightOfElement(secondParagraph, cssFontWeight, fontWeightAsNumber);
}

export function verifyStartButtonIsClickable(colorInRgb, backgroundColorInRgb) {
    checkElementIsVisible(startButton);
    checkColorOfElement(startButton, cssColor, colorInRgb);
    checkBackgroundColorOfElement(startButton, cssbackgroundColor, backgroundColorInRgb);
    clickOnElement(startButton);
}

export function verifyLastParagraph(text, link) {
    checkElementIsVisible(lastParagraph);
    checkElementContainsText(lastParagraph, text);
    checkInvokeAttrib(startLink, link)
    clickOnElement(startLink);
}
