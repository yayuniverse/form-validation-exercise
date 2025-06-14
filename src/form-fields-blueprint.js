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
};

export default FORM_BLUEPRINT;
