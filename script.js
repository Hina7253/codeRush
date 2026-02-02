const form = document.getElementById("signupForm");
const message = document.getElementById("message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  // Empty check
  if (name === "" || email === "") {
    message.style.color = "red";
    message.textContent = "Please fill in all fields.";
    return;
  }

  // Email format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    message.style.color = "red";
    message.textContent = "Please enter a valid email address.";
    return;
  }

  // Success
  message.style.color = "green";
  message.textContent = "🎉 Successfully signed up! Welcome to Coderush.";

  form.reset();
});
