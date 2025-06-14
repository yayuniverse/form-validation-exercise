/* eslint-disable no-param-reassign */
import FORM_BLUEPRINT from "./form-fields-blueprint";

function displayErrorMessage(errorMessage, element, elementHelperText) {
  elementHelperText.textContent = `${errorMessage}`;
  element.classList.add("invalid");
}

function getFormFieldDetails(key) {
  const elementDefinition = FORM_BLUEPRINT[key];
  return {
    element: document.querySelector(elementDefinition.elementSelector),
    elementHelperText: document.querySelector(
      elementDefinition.helperTextSelector,
    ),
    validateElement: elementDefinition.validate,
  };
}

function validateInput(key) {
  const { element, elementHelperText, validateElement } =
    getFormFieldDetails(key);

  const errorMessage = validateElement(element);

  if (errorMessage) {
    displayErrorMessage(errorMessage, element, elementHelperText);
  }
}

function clearError(key) {
  const { element, elementHelperText } = getFormFieldDetails(key);

  element.classList.remove("interacted");
  elementHelperText.textContent = "";
}

export { validateInput, clearError, getFormFieldDetails };
