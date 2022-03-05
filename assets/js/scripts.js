/* eslint-disable */
function menuFunction() {
  const links = document.getElementById('mobile-menu-container');
  if (links.style.display === 'block') {
    links.style.display = 'none';
  } else if (window.screen.width < 995) {
    links.style.display = 'block';
  } else {
    links.style.display = 'none';
  }
}

function menuOptions(param) {
  window.location.href = param;
  const links = document.getElementById('mobile-menu-container');
  links.style.display = 'none';
}
/* eslint-enable */

// client side validation and local storage
document.getElementById('form').addEventListener('submit', (e) => {
  const emailValue = document.getElementById('email').value;
  const emailError = document.getElementById('error-msg');
  const validate = emailValue.toLowerCase();
  if (emailValue === validate) {
    emailError.textContent = '';
    // emptying the local storage
    localStorage.removeItem('formData');
  } else {
    e.preventDefault();
    emailError.textContent = 'email should be typed in lowercase';
  }
});

// formData object
let formData = {
  full__name: '',
  email: '',
  description: '',
};
// retrieving the local storage
if (localStorage.getItem('formData') !== null) {
  const data = localStorage.getItem('formData');
  formData = JSON.parse(data);
}

// saving data to local storage

// getting form input fields and textarea
const formElements = document.querySelectorAll('input, textarea');
// looping through the elements
formElements.forEach((element) => {
  // displaying the formData values to input fields
  element.value = formData[element.name];
  // applying input event listener on elements
  element.addEventListener('input', (e) => {
    // setting the values of input fields to the respective keys in object
    formData[e.target.name] = e.target.value;
    // saving the data in local storage
    localStorage.setItem('formData', JSON.stringify(formData));
  });
});