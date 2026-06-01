document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registerForm");

  const errorMessage = document.getElementById("error-message");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const fullname = document.getElementById("fullname").value.trim();

    const email = document.getElementById("email").value.trim();

    const password = document.getElementById("password").value;

    const confirmPassword = document.getElementById("confirmPassword").value;

    const product = document.getElementById("product").value;

    const gender = document.querySelector('input[name="gender"]:checked');

    errorMessage.style.color = "#ff4444";

    /* FULL NAME */

    if (fullname.length < 3) {
      errorMessage.textContent =
        "Full Name must contain at least 3 characters.";

      return;
    }

    /* EMAIL */

    if (!email.includes("@")) {
      errorMessage.textContent = "Please enter a valid email address.";

      return;
    }

    /* PASSWORD */

    if (password.length < 8) {
      errorMessage.textContent = "Password must contain at least 8 characters.";

      return;
    }

    /* CONFIRM PASSWORD */

    if (password !== confirmPassword) {
      errorMessage.textContent = "Confirm Password does not match.";

      return;
    }

    /* GENDER */

    if (!gender) {
      errorMessage.textContent = "Please select your gender.";

      return;
    }

    /* PRODUCT */

    if (product === "") {
      errorMessage.textContent = "Please select your favorite product.";

      return;
    }

    /* SUCCESS */

    errorMessage.style.color = "#00ff88";

    errorMessage.textContent =
      "Registration Successful! Welcome to TechnoSpace.";

    form.reset();
  });
});

const dob = document.getElementById("dob").value;

if (dob === "") {
  errorMessage.innerHTML = "Date of Birth must be filled.";
  return;
}
