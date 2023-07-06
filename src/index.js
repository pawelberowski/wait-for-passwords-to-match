const passwordInput = document.querySelector("#password-input");
const confirmPasswordInput = document.querySelector("#confirm-password-input");
const confirmButton = document.querySelector('#confirm-button')

function waitForPasswordsToMatch(originalInput, confirmationInput) {
  return new Promise(function (resolve, reject) {
    if (
      !originalInput ||
      !confirmationInput ||
      originalInput.value !== confirmationInput.value
    ) {
      reject();
    }
    resolve(originalInput);
    resolve(confirmationInput);
  });
}

if (confirmButton) {
  confirmButton.addEventListener('click', function() {
    waitForPasswordsToMatch(passwordInput, confirmPasswordInput).then(() => {
      console.log("passwords match");
    });
  })
}

