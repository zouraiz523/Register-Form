// Update Hex value when color is picked
const colorPicker = document.getElementById("colorPicker");
const hexValue = document.getElementById("hexValue");
const registerBtn = document.getElementById("registerBtn");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

// Password strength messages
const passwordStrengthMsg = document.getElementById("passwordStrengthMsg");
const errorMessage = document.getElementById("errorMessage");

// Enable button only when inputs are valid
function updateButtonState() {
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    const colorSelected = colorPicker.value !== "#ffffff"; // Ensure the default color is not used
    const isUsernameValid = validateUsername(username);
    const isPasswordStrong = checkPasswordStrength(password);

    // Enable the button only if all validations pass
    registerBtn.disabled = !(username && password && colorSelected && isUsernameValid && isPasswordStrong);

    if (!registerBtn.disabled) {
        registerBtn.classList.add("active");
    } else {
        registerBtn.classList.remove("active");
    }
}

// Real-time username validation
usernameInput.addEventListener("input", () => {
    const username = usernameInput.value.trim();
    if (!validateUsername(username)) {
        errorMessage.textContent = "Username must be 3-15 characters without special symbols!";
        usernameInput.style.borderColor = "red";
    } else {
        errorMessage.textContent = "";
        usernameInput.style.borderColor = "green";
    }
    updateButtonState();
});

// Real-time password strength checking
passwordInput.addEventListener("input", () => {
    const password = passwordInput.value.trim();
    checkPasswordStrength(password);
    updateButtonState();
});

// Password strength checker function
function checkPasswordStrength(password) {
    if (password.length < 6) {
        passwordStrengthMsg.textContent = "Weak password (at least 6 characters required)";
        passwordStrengthMsg.style.color = "red";
        passwordInput.style.borderColor = "red";
        return false;
    } else if (!/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
        passwordStrengthMsg.textContent = "Moderate password (include uppercase and numbers)";
        passwordStrengthMsg.style.color = "orange";
        passwordInput.style.borderColor = "orange";
        return false;
    } else {
        passwordStrengthMsg.textContent = "Strong password!";
        passwordStrengthMsg.style.color = "green";
        passwordInput.style.borderColor = "green";
        return true;
    }
}

// Username validation function
function validateUsername(username) {
    const usernameRegex = /^[a-zA-Z0-9]{3,15}$/; // Only alphanumeric, 3-15 chars
    return usernameRegex.test(username);
}

// Event listener for color picker
colorPicker.addEventListener("input", function () {
    hexValue.textContent = "Hex: " + colorPicker.value; // Update hex value display
    updateButtonState(); // Recheck button state
});

// Form submission handler
const form = document.getElementById("registerForm");
form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    const color = colorPicker.value;

    // Save data to localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("favoriteColor", color);

    alert(`Registration Successful! 
    Username: ${username}
    Favorite Color: ${color}`);
});

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

