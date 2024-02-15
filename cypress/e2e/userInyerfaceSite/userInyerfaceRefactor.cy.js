import { verifyFirstParagraphIsCorrect, verifyLastParagraph, verifyLogoIsVisible, verifySecondParagraphIsCorrect, verifyStartButtonIsClickable, visitStartPageUrl } from "./startPage";

const firstParagraphText = 'Hi and welcome to User Inyerface, a challenging exploration of user interactions and design patterns.';
const secondParagraphText = 'To play the game, simply fill in the form as fast and accurate as possible.';
const lastParagraphText = 'Please click HERE to GO to the next page';

const greenColorRgb = 'rgb(41, 197, 102)';
const whiteColorRgb = 'rgb(255, 255, 255)';


const fontSize24 = '24px';
const fontWeight100 = '100';
const gameLink = '/game.html';

describe('Start page checks', () => {

  beforeEach(() => {
    visitStartPageUrl();
  });

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
  });
});
