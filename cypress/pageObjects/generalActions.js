/// <reference types="Cypress" />

const footerLogo = ".bagaar-link";
const footerLogoImage = ".bagaar-link__image";
const footerLogoImageTitle = "https://verhaert.digital/";
const footerLogoImageSource = "images/verhaert-digital-logo.svg";

export function verifyFooterLogoExists() {
    cy.get(footerLogo)
        .should('exist');
}

export function verifyFooterLogoImageIsCorrect() {
    cy.get(footerLogoImage)
        .should('have.attr', 'title', footerLogoImageTitle);
    cy.get(footerLogoImage)
        .should('have.attr', 'src', footerLogoImageSource);
}
