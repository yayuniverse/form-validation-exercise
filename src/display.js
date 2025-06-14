/* eslint-disable no-param-reassign */
import getFormFieldDetails from "./utility";

function displayErrorMessage(errorMessage, element, elementHelperText) {
  elementHelperText.textContent = `${errorMessage}`;
  element.classList.add("invalid");
}

function clearError(key) {
  const { element, elementHelperText } = getFormFieldDetails(key);

  element.classList.remove("interacted");
  elementHelperText.textContent = "";
}

export { displayErrorMessage, clearError };
