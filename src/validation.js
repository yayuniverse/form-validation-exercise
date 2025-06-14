/* eslint-disable no-param-reassign */
import FORM_BLUEPRINT from "./form-fields-blueprint";

function displayErrorMessage(errorMessage, element, elementHelperText) {
  elementHelperText.textContent = `${errorMessage}`;
  element.classList.add("invalid");
}

function validateInput(key) {
  const elementInstructions = FORM_BLUEPRINT[key];

  const element = document.querySelector(elementInstructions.elementSelector);
  const validateElement = elementInstructions.validate;

  const errorMessage = validateElement(element);
  const elementHelperText = document.querySelector(
    elementInstructions.helperTextSelector,
  );

  if (errorMessage) {
    displayErrorMessage(errorMessage, element, elementHelperText);
  }
}

function clearError(key) {
  const elementInstructions = FORM_BLUEPRINT[key];

  const element = document.querySelector(elementInstructions.elementSelector);
  const elementHelperText = document.querySelector(
    elementInstructions.helperTextSelector,
  );

  element.classList.remove("interacted");
  elementHelperText.textContent = "";
}

export { validateInput, clearError };
