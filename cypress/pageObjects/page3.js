/// <reference types="Cypress" />

import { clearThenTypeOnElement, clickOnElement, typeOnElement } from "./generalActions";

const firstName = ":nth-child(1) > :nth-child(1) > .personal-details__property-item-table > .personal-details__property-item-tr-row > .personal-details__td-value > .input";
const title = ":nth-child(1) > .personal-details__property-item-table > .personal-details__property-item-tr-row > .personal-details__td-value > .dropdown > .dropdown__header > .dropdown__field";
const titleMrs = ":nth-child(1) > .personal-details__property-item-table > .personal-details__property-item-tr-row > .personal-details__td-value > .dropdown > .dropdown__list > :nth-child(2)";
const lastName = ":nth-child(3) > :nth-child(1) > .personal-details__property-item-table > .personal-details__property-item-tr-row > .personal-details__td-value > .input";
const street = ":nth-child(4) > :nth-child(1) > .personal-details__property-item-table > .personal-details__property-item-tr-row > .personal-details__td-value > .input";
const zipPostal = ":nth-child(1) > :nth-child(2) > .personal-details__property-item-table > .personal-details__property-item-tr-row > .personal-details__td-value > .input";
const city = ":nth-child(2) > :nth-child(2) > .personal-details__property-item-table > .personal-details__property-item-tr-row > .personal-details__td-value > .input";
const country = ":nth-child(1) > :nth-child(2) > .personal-details__property-item-table > .personal-details__property-item-tr-row > .personal-details__td-value > .input";
const countryAf = ".flag-af";
const birthDay = ".date-dropdown__container--day > .dropdown > .dropdown__header > .dropdown__field";
const birthMonth = ".date-dropdown__container--day > .dropdown > .dropdown__header > .dropdown__field";
const birthYear = ".date-dropdown__container--day > .dropdown > .dropdown__header > .dropdown__field";
const ageSlider = ".slider__handle";
const sendToBottomButton = ".u-right > .button";
const nextButton = ".personal-details__bottom-button-container > .align > :nth-child(1) > .button";

export function completePage3(text) {
  clearThenTypeOnElement(firstName, text)
  clickOnElement(title)
  clickOnElement(titleMrs)
  clearThenTypeOnElement(lastName, text)
  clickOnElement(country)
  clickOnElement(countryAf, { force: true })
  clearThenTypeOnElement(street, text)
  clearThenTypeOnElement(zipPostal, text)
  clearThenTypeOnElement(city, text)
  clickOnElement(sendToBottomButton)
  cy.wait(3000)
  clickOnElement(nextButton, { force: true })

}