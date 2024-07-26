const form = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
//const passwordInput = document.getElementById('password');
const nameWarning = document.getElementById('nameWarning');
const emailWarning = document.getElementById('emailWarning');
//const passwordWarning = document.getElementById('passwordWarning');

form.addEventListener('submit', function(event) {
  let isValid = true;

  if (nameInput.value.trim() === '') {
    nameWarning.style.display = 'block';
    isValid = false;
  } else {
    nameWarning.style.display = 'none';
  }

  if (!emailInput.validity.valid) {
    emailWarning.style.display = 'block';
    isValid = false;
  } else {
    emailWarning.style.display = 'none';
  }

//   if (passwordInput.value.length < 8) {
//     passwordWarning.style.display = 'block';
//     isValid = false;
//   } else {
//     passwordWarning.style.display = 'none';
//   }

  if (!isValid) {
    event.preventDefault();
  }
});









