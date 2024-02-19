import { clearThenTypeOnElement, clickOnElement, typeOnElement } from "./generalActions";

const passwordField = ":nth-child(2) > .input";
const emailField = ":nth-child(1) > .input";
const domainField = ":nth-child(3) > .input";
const domainLevelDropDown = ".dropdown__field";
const domainLevelOption1 = ".dropdown__list > :nth-child(2)";
const termsConditionsCheckbox = ".checkbox__box > .icon";
const nextButton = ":nth-child(1) > .button--secondary";

export function completePage1(password, email, domain) {
    clearThenTypeOnElement(passwordField, password)
    clearThenTypeOnElement(emailField, email)
    clearThenTypeOnElement(domainField, domain)
    clickOnElement(domainLevelDropDown)
    clickOnElement(domainLevelOption1)
    clickOnElement(termsConditionsCheckbox)
    clickOnElement(nextButton)
}