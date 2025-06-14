import "./reset.css";
import "./global.css";
import { validateInput, clearError } from "./validation";

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

const emailField = document.querySelector("#email");

emailField.addEventListener("focus", () => {
  clearError("email");
});

emailField.addEventListener("blur", () => {
  validateInput("email");
});
