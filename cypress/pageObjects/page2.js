/// <reference types="Cypress" />

import { clearThenTypeOnElement, clickOnElement, typeOnElement } from "./generalActions";
import { openFileDialog } from "./workaround";

const poniesCheckbox = ":nth-child(1) > div > .checkbox > .checkbox__label > .checkbox__box > .icon";
const enveloppesCheckbox = ":nth-child(8) > div > .checkbox > .checkbox__label > .checkbox__box > .icon";
const closetsCheckbox = ":nth-child(15) > div > .checkbox > .checkbox__label > .checkbox__box > .icon";
const unselectAllCheckbox = ":nth-child(21) > div > .checkbox > .checkbox__label > .checkbox__box > .icon";
const downloadButton = ".avatar-and-interests__avatar-upload-cell > div > .align__cell";
const uploadLink = ".avatar-and-interests__upload-button";
const nextButton = ".avatar-and-interests-page__buttons > .align > :nth-child(1) > .button";

export function completePage2() {
  clickOnElement(unselectAllCheckbox)
  clickOnElement(poniesCheckbox)
  clickOnElement(enveloppesCheckbox)
  clickOnElement(closetsCheckbox)
  clickOnElement(downloadButton)
  clickOnElement(uploadLink)
  clickOnElement(nextButton)

  /*
  cy.get(uploadLink).then(($element) => {
    const rect = $element[0].getBoundingClientRect();
    const x = rect.left + window.scrollX;
    const x1 = rect.right + window.scrollX;
    const y = rect.top + window.scrollY;
    const y1 = rect.bottom + window.scrollY;
  
    // Log the coordinates
    cy.log(`Element X: ${x} -- ${x1}`);
    cy.log(`Element Y: ${y} -- ${y1}`);
  });
  
  //openFileDialog()
  //cy.wait(7500);
  */

}