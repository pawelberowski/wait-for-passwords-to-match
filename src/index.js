const passwordInput = document.querySelector('#password-input');
const confirmPasswordInput = document.querySelector('#confirm-password-input');

function areValuesMatchingAndNotEmpty(firstValue, secondValue) {
  return firstValue === secondValue && firstValue && secondValue;
}

function waitForPasswordsToMatch(firstInput, secondInput) {
  return new Promise(function (resolve, reject) {
    if (!firstInput || !secondInput) {
      return reject();
    }
    let firstValue = '';
    let secondValue = '';
    firstInput.addEventListener('input', function (event) {
      firstValue = event.target.value;
      if (areValuesMatchingAndNotEmpty(firstValue, secondValue)) {
        resolve();
      }
    });
    secondInput.addEventListener('input', function (event) {
      secondValue = event.target.value;
      if (areValuesMatchingAndNotEmpty(firstValue, secondValue)) {
        resolve();
      }
    });
  });
}

waitForPasswordsToMatch(passwordInput, confirmPasswordInput)
  .then(function () {
    console.log('Passwords match');
  })
  .catch(function () {
    console.log('One of the inputs does not exist');
  });
