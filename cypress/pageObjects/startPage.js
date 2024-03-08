const startPageUrl = "https://userinyerface.com/";

const logoIcon = ".logo__icon";
const firstParagraph = ".view__content > :nth-child(2) > :nth-child(1)";
const secondParagraph = ".view__content > :nth-child(2) > :nth-child(2)";
const startButton = ".start__button";
const lastParagraph = ":nth-child(4) > p";
const startLink = ".start__link";

export function visitStartPageUrl() {
    cy.visit(startPageUrl);
    /*let currentUrl;

    cy.visit(startPageUrl)
        .then(() => {
            // Get the current URL and store it in the variable
            cy.url().then((url) => {
                currentUrl = url;
            });
        });*/
    // Now 'currentUrl' contains the URL you visited
    // You can use it later in your test
}

export function verifyLogoIsVisible() {
    cy.get(logoIcon)
        .should('be.visible');
}

export function verifyFirstParagraphIsCorrect(text, colorInRgb, fontSizeInPx, fontWeightAsNumber) {
    cy.get(firstParagraph).contains(text);
    cy.get(firstParagraph)
        .should('have.css', 'color', colorInRgb);
    cy.get(firstParagraph)
        .should('have.css', 'font-size', fontSizeInPx);
    cy.get(firstParagraph)
        .should('have.css', 'font-weight', fontWeightAsNumber);
}

export function verifySecondParagraphIsCorrect(text, colorInRgb, fontSizeInPx, fontWeightAsNumber) {
    cy.get(secondParagraph).contains(text);
    cy.get(secondParagraph)
        .should('have.css', 'color', colorInRgb);
    cy.get(secondParagraph)
        .should('have.css', 'font-size', fontSizeInPx);
    cy.get(secondParagraph)
        .should('have.css', 'font-weight', fontWeightAsNumber);
}

export function verifyStartButtonIsClickable(colorInRgb, backgroundColorInRgb) {
    cy.get(startButton)
        .should('be.visible');
    cy.get(startButton)
        .should('have.css', 'color', colorInRgb);
    cy.get(startButton)
        .should('have.css', 'background-color', backgroundColorInRgb);
    cy.get(startButton).click();
}

export function verifyLastParagraph(text, link) {
    cy.get(lastParagraph)
        .should('be.visible');
    cy.get(lastParagraph).contains(text);
    cy.get(startLink).invoke('attr', 'href')
        .should('eq', link);
    cy.get(startLink).click();
}
