const passwordField = ":nth-child(2) > .input";
const emailField = ":nth-child(1) > .input";
const domainField = ":nth-child(3) > .input";
const domainLevelDropDown = ".dropdown__field";
const domainLevelOption1 = ".dropdown__list > :nth-child(2)";
const termsConditionsCheckbox = ".checkbox__box > .icon";
const nextButton = ":nth-child(1) > .button--secondary";

export function completePage1(password, email, domain) {
    cy.get(passwordField).clear()
        .type(password);
    cy.get(emailField).clear()
        .type(email);
    cy.get(domainField).clear()
        .type(domain);
    cy.get(domainLevelDropDown).click();
    cy.get(domainLevelOption1).click();
    cy.get(termsConditionsCheckbox).click();
    cy.get(nextButton).click();
}