import POSTAL_CODES from "./postal-codes";

const FORM_BLUEPRINT = {
  email: {
    elementSelector: "#email",
    helperTextSelector: "#emailHelper",

    validate: (element) => {
      if (element.validity.valueMissing) {
        return "Enter a valid email address";
      }

      if (element.validity.typeMismatch) {
        return "Invalid email address";
      }

      return "";
    },
  },
  country: {
    elementSelector: "#country",
    helperTextSelector: "#countryHelper",

    validate: (element) => {
      if (element.validity.valueMissing) {
        return "Select a country";
      }

      return "";
    },
  },
  postal: {
    elementSelector: "#postal",
    helperTextSelector: "#postalHelper",

    validate: (element) => {
      const countrySelect = document.querySelector(
        FORM_BLUEPRINT.country.elementSelector,
      );
      const selectedCountry =
        countrySelect.options[countrySelect.selectedIndex].text;

      if (element.validity.valueMissing) {
        return `Enter a postal code for ${selectedCountry}`;
      }

      const pattern = new RegExp(POSTAL_CODES[countrySelect.value].pattern);
      const validationResult = pattern.test(element.value);

      if (!validationResult) {
        return `Invalid code format for ${selectedCountry}`;
      }

      return "";
    },
  },
};

export default FORM_BLUEPRINT;
