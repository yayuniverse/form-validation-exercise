import "./css/reset.css";
import "./css/global.css";
import FORM_BLUEPRINT from "./form-fields-blueprint";
import validateInput from "./validation";
import getFormFieldDetails from "./utility";
import { clearError, enablePostal } from "./display";
import POSTAL_CODES from "./postal-codes";

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  Object.keys(FORM_BLUEPRINT).forEach((key) => {
    validateInput(key);
  });
});

// iteratively find and attach event listeners to elements using the definitions in the FORM_BLUEPRINT structure
Object.keys(FORM_BLUEPRINT).forEach((key) => {
  const { element } = getFormFieldDetails(key);

  element.addEventListener("focus", () => {
    clearError(key);
  });

  element.addEventListener("blur", () => {
    validateInput(key);
  });
});

// handle dependence between country and postal code elements
const { element: countryField } = getFormFieldDetails("country");
const { element: postalField } = getFormFieldDetails("postal");

countryField.addEventListener("change", () => {
  enablePostal();

  const selectedCountry = countryField.value;
  const { pattern } = POSTAL_CODES[selectedCountry];
  postalField.setAttribute("pattern", pattern);

  if (postalField.value !== "") {
    clearError("postal");
    validateInput("postal");
  }
});

// handle dependence between password and password confirmation elements
const { element: passwordField } = getFormFieldDetails("password");
const { element: passwordConfirmField } =
  getFormFieldDetails("passwordConfirm");

passwordField.addEventListener("change", () => {
  if (passwordConfirmField.value !== "") {
    clearError("passwordConfirm");
    validateInput("passwordConfirm");
  }
});
