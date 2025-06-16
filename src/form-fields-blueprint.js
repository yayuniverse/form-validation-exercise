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
      if (element.validity.valueMissing) {
        return `Enter a postal code`;
        // return `Enter a postal code for ${selectedCountry}`;
      }

      if (element.validity.patternMismatch) {
        return `Invalid code format`;
        // return `Invalid code format for ${selectedCountry}`;
      }

      return "";
    },
  },
};

export default FORM_BLUEPRINT;
