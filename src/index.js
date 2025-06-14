import "./reset.css";
import "./global.css";
import { validateInput, clearError, getFormFieldDetails } from "./validation";
import FORM_BLUEPRINT from "./form-fields-blueprint";

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
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
