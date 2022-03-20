// form validation
//this is not currently in use since there is no form.
document.addEventListener(
  "blur",
  function (event) {
    // Validate the field
    const isValid = event.target.validity.valid;
    const message = event.target.validationMessage;
    const connectedValidationId = event.target.getAttribute("aria-describedby");
    const connectedValidation = connectedValidationId
      ? document.getElementById(connectedValidationId)
      : false;

    if (connectedValidation && message && !isValid) {
      connectedValidation.innerText = `Warning: ${message}`;
    } else {
      connectedValidation.innerText = "";
    }
  },
  true
);
