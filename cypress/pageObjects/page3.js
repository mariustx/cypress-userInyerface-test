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
  cy.get(firstName).clear()
    .type(text);
  cy.get(title).click();
  cy.get(titleMrs).click();
  cy.get(lastName).clear()
    .type(text);
  cy.get(country).click();
  cy.get(countryAf, { force: true }).click();
  cy.get(street).clear()
    .type(text);
  cy.get(zipPostal).clear()
    .type(text);
  cy.get(city).clear()
    .type(text);
  cy.get(sendToBottomButton).click();
  cy.wait(3000);
  cy.get(nextButton, { force: true }).click();

}