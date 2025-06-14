import FORM_BLUEPRINT from "./form-fields-blueprint";

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

export default getFormFieldDetails;
