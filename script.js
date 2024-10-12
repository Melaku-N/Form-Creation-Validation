document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");
  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const fmt = (f) => f.value.trim();

  form.addEventListener("submit", (ev) => {
    let isValid = true;
    let messages = [];
    feedbackDiv.innerHTML = "";

    ev.preventDefault();
    if (fmt(username).length < 3) {
      isValid = false;
      messages.push("Username is too short. Minimum length is 3 characters.");
    }
    if (!(fmt(email).includes("@") && fmt(email).includes("."))) {
      isValid = false;
      messages.push("Invalid email address.");
    }
    if (fmt(password).length < 8) {
      isValid = false;
      messages.push("Password is too short. Minimum length is 8 characters.");
    }
    feedbackDiv.style.display = "block";
    if (isValid) {
      feedbackDiv.textContent = "Registration successful!";
      feedbackDiv.style.color = "#28a745";
    } else {
      for (let message of messages) {
        feedbackDiv.innerHTML += `${message}<br>`;
        if (message !== messages[messages.length - 1])
          feedbackDiv.innerHTML += "<br>";
        feedbackDiv.style.color = "#dc3545";
      }
    }
  });
});
