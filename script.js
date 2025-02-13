// List of random country codes
const countryCodes = [
    "+1", "+880", "+44", "+91", "+81", "+86", "+49", "+33", "+61", "+55", "+7"
];

// Elements
const countryCodeBtn = document.getElementById("country-code-btn");
const countryCodeOutput = document.getElementById("country-code-output");
const phoneSlider = document.getElementById("phone-slider");
const phoneOutput = document.getElementById("phone-output");

// Generate random country code
countryCodeBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * countryCodes.length);
    countryCodeOutput.textContent = `Country Code: ${countryCodes[randomIndex]}`;
});

// Update phone number from slider
phoneSlider.addEventListener("input", () => {
    const phoneNumber = phoneSlider.value.padStart(10, "0");
    phoneOutput.textContent = phoneNumber;
});
