const POSTAL_CODES = {
  US: {
    pattern: "^\\d{5}(?:-\\d{4})?$",
    placeholder: "e.g., 90210 or 90210-1234",
  },
  CA: {
    pattern: "^[A-Za-z]\\d[A-Za-z][ -]?\\d[A-Za-z]\\d$",
    placeholder: "e.g., K1A 0B1",
  },
  NG: {
    pattern: "^\\d{6}$",
    placeholder: "e.g., 100001",
  },
  JP: {
    pattern: "^\\d{3}-\\d{4}$",
    placeholder: "e.g., 100-0001",
  },
  DE: {
    pattern: "^\\d{5}$",
    placeholder: "e.g., 10115",
  },
};

export default POSTAL_CODES;
