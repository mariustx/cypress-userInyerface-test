import { verifyLogoIsVisible } from "./startPage";

const firstParagraphText = 'Hi and welcome to User Inyerface, a challenging exploration of user interactions and design patterns.';
const secondParagraphText = 'To play the game, simply fill in the form as fast and accurate as possible.';
const lastParagraphText = 'Please click HERE to GO to the next page';

const greenColorRgb = 'rgb(41, 197, 102)';
const whiteColorRgb = 'rgb(255, 255, 255)';
describe('Start page', () => {
  let currentUrl;

  beforeEach(() => {

    cy.visit('https://userinyerface.com/')
      .then(() => {
        // Get the current URL and store it in the variable
        cy.url().then((url) => {
          currentUrl = url;
        });
      });

    // Now 'currentUrl' contains the URL you visited
    // You can use it later in your test
  });

  it('verifies if the logo is present', () => {
    verifyLogoIsVisible();
  });

  it('verifies if the first paragraph is correct', () => {
    cy.get('.view__content > :nth-child(2) > :nth-child(1)')
      .contains(firstParagraphText)
      .and('have.css', 'color', greenColorRgb)
      .and('have.css', 'font-size', '24px')
      .and('have.css', 'font-weight', '100');
  });

  it('verifies if the second paragraph is correct', () => {
    cy.get('.view__content > :nth-child(2) > :nth-child(2)')
      .contains(secondParagraphText)
      .and('have.css', 'color', greenColorRgb)
      .and('have.css', 'font-size', '24px')
      .and('have.css', 'font-weight', '100');
  });

  it('verifies if start button can be clicked', () => {
    cy.get('.start__button')
      .should('be.visible')
      .and('have.css', 'color', whiteColorRgb)
      .and('have.css', 'background-color', greenColorRgb)
      .click();
  });

  it('verifies the last paragraph', () => {
    cy.get(':nth-child(4) > p')
      .contains(lastParagraphText);
    cy.get('.start__link')
      .invoke('attr', 'href').should('eq', '/game.html');
    cy.get('.start__link')
      .click();
  });
});
