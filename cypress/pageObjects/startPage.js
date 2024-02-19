import { checkElementIsVisible, checkElementContainsText, checkColorOfElement, checkFontSizeOfElement, checkFontWeightOfElement, checkBackgroundColorOfElement, clickOnElement, checkInvokeAttrib } from "./generalActions";

const startPageUrl = "https://userinyerface.com/";

const logoIcon = ".logo__icon";
const firstParagraph = ".view__content > :nth-child(2) > :nth-child(1)";
const secondParagraph = ".view__content > :nth-child(2) > :nth-child(2)";
const startButton = ".start__button";
const lastParagraph = ":nth-child(4) > p";
const startLink = ".start__link";

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

export function verifyLogoIsVisible() {
    checkElementIsVisible(logoIcon);
}

export function verifyFirstParagraphIsCorrect(text, colorInRgb, fontSizeInPx, fontWeightAsNumber) {
    checkElementContainsText(firstParagraph, text);
    checkColorOfElement(firstParagraph, colorInRgb);
    checkFontSizeOfElement(firstParagraph, fontSizeInPx);
    checkFontWeightOfElement(firstParagraph, fontWeightAsNumber);
}

export function verifySecondParagraphIsCorrect(text, colorInRgb, fontSizeInPx, fontWeightAsNumber) {
    checkElementContainsText(secondParagraph, text);
    checkColorOfElement(secondParagraph, colorInRgb);
    checkFontSizeOfElement(secondParagraph, fontSizeInPx);
    checkFontWeightOfElement(secondParagraph, fontWeightAsNumber);
}

export function verifyStartButtonIsClickable(colorInRgb, backgroundColorInRgb) {
    checkElementIsVisible(startButton);
    checkColorOfElement(startButton, colorInRgb);
    checkBackgroundColorOfElement(startButton, backgroundColorInRgb);
    clickOnElement(startButton);
}

export function verifyLastParagraph(text, link) {
    checkElementIsVisible(lastParagraph);
    checkElementContainsText(lastParagraph, text);
    checkInvokeAttrib(startLink, link)
    clickOnElement(startLink);
}
