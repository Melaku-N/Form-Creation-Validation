document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");

  form.addEventListener("submit", (ev) => {
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    let isValid = true;
    let messages = [];
    feedbackDiv.innerHTML = "";

    ev.preventDefault();
    if (username.length < 3) {
      isValid = false;
      messages.push("Username is too short. Minimum length is 3 characters.");
    }
    if (!(email.includes("@") && email.includes("."))) {
      isValid = false;
      messages.push("Invalid email address.");
    }
    if (password.length < 8) {
      isValid = false;
      messages.push("Password is too short. Minimum length is 8 characters.");
    }
    feedbackDiv.style.display = "block";
    if (isValid) {
      feedbackDiv.textContent = "Registration successful!";
      feedbackDiv.style.color = "#28a745";
    } else {
      feedbackDiv.innerHTML += messages.join("<br>");
      feedbackDiv.style.color = "#dc3545";
    }
  });
});
