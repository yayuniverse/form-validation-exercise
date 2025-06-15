/* eslint-disable no-param-reassign */
import getFormFieldDetails from "./utility";
import FORM_BLUEPRINT from "./form-fields-blueprint";

function displayErrorMessage(errorMessage, element, elementHelperText) {
  elementHelperText.textContent = `${errorMessage}`;
  element.classList.add("invalid");
}

function clearError(key) {
  const { element, elementHelperText } = getFormFieldDetails(key);

  element.classList.remove("invalid");
  elementHelperText.textContent = "";
}

function enablePostal() {
  const postal = document.querySelector(FORM_BLUEPRINT.postal.elementSelector);

  postal.removeAttribute("placeholder");
  postal.removeAttribute("disabled");
}

export { displayErrorMessage, clearError, enablePostal };
