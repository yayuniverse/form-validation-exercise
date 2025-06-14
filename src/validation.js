/* eslint-disable no-param-reassign */
import FORM_BLUEPRINT from "./form-fields-blueprint";

function displayErrorMessage(errorMessage, element, elementHelperText) {
  elementHelperText.textContent = `${errorMessage}`;
  element.classList.add("invalid");
}

function getElementInstructions(key) {
  const elementInstructions = FORM_BLUEPRINT[key];
  return {
    element: document.querySelector(elementInstructions.elementSelector),
    elementHelperText: document.querySelector(
      elementInstructions.helperTextSelector,
    ),
    validateElement: elementInstructions.validate,
  };
}

function validateInput(key) {
  const { element, elementHelperText, validateElement } =
    getElementInstructions(key);

  const errorMessage = validateElement(element);

  if (errorMessage) {
    displayErrorMessage(errorMessage, element, elementHelperText);
  }
}

function clearError(key) {
  const { element, elementHelperText } = getElementInstructions(key);

  element.classList.remove("interacted");
  elementHelperText.textContent = "";
}

export { validateInput, clearError };
