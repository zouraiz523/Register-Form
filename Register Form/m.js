// Replace feather icons
feather.replace();

const eye = document.querySelector(".feather-eye");
const eyeoff = document.querySelector(".feather-eye-off");
const passwordField = document.querySelector("#password");

eye.addEventListener("click", () => {
    eye.style.display = "none"; // Hide eye icon
    eyeoff.style.display = "block"; // Show eye-off icon
    passwordField.type = "text"; // Show password
});

eyeoff.addEventListener("click", () => {
    eyeoff.style.display = "none"; // Hide eye-off icon
    eye.style.display = "block"; // Show eye icon
    passwordField.type = "password"; // Hide password
});
