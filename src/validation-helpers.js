function doPasswordsMatch() {
  const passwordField = document.querySelector("#password");
  const passwordConfirmField = document.querySelector("#passwordConfirm");

  return passwordField.value === passwordConfirmField.value;
}

export default doPasswordsMatch;
