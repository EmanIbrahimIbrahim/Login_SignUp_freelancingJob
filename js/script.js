const form = document.getElementById("registerForm");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

form.addEventListener(
  "submit",
  function (event) {
    confirmPassword.setCustomValidity("");

    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }
    if (password.value !== confirmPassword.value) {
      confirmPassword.setCustomValidity("Passwords do not match.");
      event.preventDefault();
      event.stopPropagation();
    }
    form.classList.add("was-validated");
  },
  false
);
