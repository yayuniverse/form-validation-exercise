const FORM_BLUEPRINT = {
  email: {
    elementSelector: "#email",
    helperTextSelector: "#emailHelper",

    validate: (emailElement) => {
      if (emailElement.validity.valueMissing) {
        return "Enter a valid email address";
      }

      if (emailElement.validity.typeMismatch) {
        return "Invalid email address";
      }

      return "";
    },
  },
};

export default FORM_BLUEPRINT;
