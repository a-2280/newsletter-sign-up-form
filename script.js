const form = document.getElementById("form");
const input = document.getElementById("email");
const errorLabel = document.querySelector(".label-error");
const successScreen = document.querySelector(".success");
const dismissButton = document.getElementById("dismiss-button");
const submittedEmail = document.getElementById("submitted-email");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const email = input.value;

  if (!emailRegex.test(email)) {
    input.classList.add("error");
    errorLabel.classList.remove("hide");
  } else {
    input.classList.remove("error");
    errorLabel.classList.add("hide");
    successScreen.classList.toggle("hide");
    submittedEmail.innerText = input.value;
    input.value = "";
  }
});

dismissButton.addEventListener("click", () => {
  successScreen.classList.toggle("hide");
});
