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
