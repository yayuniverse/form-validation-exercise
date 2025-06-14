/* eslint-disable no-param-reassign */
import FORM_BLUEPRINT from "./form-fields-blueprint";

function displayErrorMessage(errorMessage, element, elementHelperText) {
  elementHelperText.textContent = `${errorMessage}`;
  element.classList.add("invalid");
}

function getElementInstructions(key) {
  const elementInstructions = FORM_BLUEPRINT[key];
  return {
    elementInstructions,
    element: document.querySelector(elementInstructions.elementSelector),
    elementHelperText: document.querySelector(
      elementInstructions.helperTextSelector,
    ),
  };
}

function validateInput(key) {
  const { elementInstructions, element, elementHelperText } =
    getElementInstructions(key);

  const validateElement = elementInstructions.validate;

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
