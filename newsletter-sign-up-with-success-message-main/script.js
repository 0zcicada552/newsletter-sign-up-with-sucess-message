const email = document.querySelector(".email-input");
const errorMessage = document.querySelector(".statut-error")
const form = document.querySelector("form");
const overlay = document.querySelector(".overlay");
const validEmail = document.querySelector(".valid-email")
const dismissBtn = document.querySelector(".btn-dismiss");

form.addEventListener("submit", (e) => {
    if(!isValidEmail(email.value.trim())) {
        e.preventDefault();
        errorMessage.style.opacity = "1";
        email.classList.add("login-error");
    } else {
        e.preventDefault();
        overlay.style.transform = "scale(1)";
        validEmail.textContent = `${email.value.trim()}`
    }
});

dismissBtn.addEventListener("click", () => {
    overlay.style.transform = "scale(0)";
    email.value = "";
    email.classList.remove("login-error");
    errorMessage.style.opacity = "0";
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}