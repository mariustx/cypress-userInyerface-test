/// <reference types="Cypress" />

import { typeOnElement } from "../../pageObjects/generalActions";
import { completePage1 } from "../../pageObjects/page1";
import { completePage2 } from "../../pageObjects/page2";
import { completePage3 } from "../../pageObjects/page3";
import { verifyFirstParagraphIsCorrect, verifyLastParagraph, verifyLogoIsVisible, verifySecondParagraphIsCorrect, verifyStartButtonIsClickable, visitStartPageUrl } from "../../pageObjects/startPage";

const firstParagraphText = 'Hi and welcome to User Inyerface, a challenging exploration of user interactions and design patterns.';
const secondParagraphText = 'To play the game, simply fill in the form as fast and accurate as possible.';
const lastParagraphText = 'Please click HERE to GO to the next page';

const greenColorRgb = 'rgb(41, 197, 102)';
const whiteColorRgb = 'rgb(255, 255, 255)';


const fontSize24 = '24px';
const fontWeight100 = '100';
const gameLink = '/game.html';

const password = "P@ssword12";
const mail = "Yourmail";
const domain = "omain";
const textForTest = "textForTest";

describe('Start page checks', () => {

  beforeEach(() => {
    visitStartPageUrl();
  });
  /*
    it('verifies if the logo is present', () => {
      verifyLogoIsVisible();
    });
  
    it('verifies if the first paragraph is correct', () => {
      verifyFirstParagraphIsCorrect(firstParagraphText, greenColorRgb, fontSize24, fontWeight100);
    });
  
    it('verifies if the second paragraph is correct', () => {
      verifySecondParagraphIsCorrect(secondParagraphText, greenColorRgb, fontSize24, fontWeight100);
    });
  
    it('verifies if start button can be clicked', () => {
      verifyStartButtonIsClickable(whiteColorRgb, greenColorRgb)
    });
  
    it('verifies the last paragraph', () => {
      verifyLastParagraph(lastParagraphText, gameLink)
    });*/

  it('completes page 1', () => {
    verifyLastParagraph(lastParagraphText, gameLink)
    completePage1(password, mail, domain);
    completePage2();
    completePage3(textForTest);
  });
});
