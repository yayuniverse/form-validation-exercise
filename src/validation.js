import getFormFieldDetails from "./utility";
import { displayErrorMessage } from "./display";

function validateInput(key) {
  const { element, elementHelperText, validateElement } =
    getFormFieldDetails(key);

  const errorMessage = validateElement(element);

  if (errorMessage) {
    displayErrorMessage(errorMessage, element, elementHelperText);
  }
}

export default validateInput;
