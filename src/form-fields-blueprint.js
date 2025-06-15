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
    elementSelector: "#countrySelect",
    helperTextSelector: "#countryHelper",

    validate: (element) => {
      if (element.validity.valueMissing) {
        return "Select a country";
      }

      return "";
    },
  },
};

export default FORM_BLUEPRINT;
