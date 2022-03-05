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

// description project modal array

const projects = [
  {
    id: 1,
    title: 'Multi-Post Stories Gain+Glory',
    img: 'assets/images/projects/prj1.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    liveLink: 'https://aliatayee.github.io/Portfolio-mobile-version-skeleton-/',
    github: 'https://github.com/aliatayee/Portfolio-mobile-version-skeleton-',
    techstack: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
  },
  {
    id: 2,
    title: 'Multi-Post Stories Gain+Glory',
    img: 'assets/images/projects/prj1.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    liveLink: 'https://aliatayee.github.io/Portfolio-mobile-version-skeleton-/',
    github: 'https://github.com/aliatayee/Portfolio-mobile-version-skeleton-',
    techstack: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
  },
  {
    id: 3,
    title: 'Multi-Post Stories Gain+Glory',
    img: 'assets/images/projects/prj1.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    liveLink: 'https://aliatayee.github.io/Portfolio-mobile-version-skeleton-/',
    github: 'https://github.com/aliatayee/Portfolio-mobile-version-skeleton-',
    techstack: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
  },
  {
    id: 4,
    title: 'Multi-Post Stories Gain+Glory',
    img: 'assets/images/projects/prj1.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    liveLink: 'https://aliatayee.github.io/Portfolio-mobile-version-skeleton-/',
    github: 'https://github.com/aliatayee/Portfolio-mobile-version-skeleton-',
    techstack: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
  },
  {
    id: 4,
    title: 'Multi-Post Stories Gain+Glory',
    img: 'assets/images/projects/prj1.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    liveLink: 'https://aliatayee.github.io/Portfolio-mobile-version-skeleton-/',
    github: 'https://github.com/aliatayee/Portfolio-mobile-version-skeleton-',
    techstack: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
  },
  {
    id: 4,
    title: 'Multi-Post Stories Gain+Glory',
    img: 'assets/images/projects/prj1.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    liveLink: 'https://aliatayee.github.io/Portfolio-mobile-version-skeleton-/',
    github: 'https://github.com/aliatayee/Portfolio-mobile-version-skeleton-',
    techstack: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
  },

];

const gridContainer = document.getElementById('project_container');
document.getElementById('body').onload = () => {
  projects.forEach((project, index) => {
    gridContainer.innerHTML += `
      <div class="img-patholder">
                    <div class="img-box"><img src="${project.img}" alt="project 1"></div>
                    <h3 class="title-project">${project.title}</h3>
                    <ul class="buttons">
                        <li>ruby on rails</li>
                        <li>Css</li>
                        <li>javascript</li>
                        <li>html</li>
                    </ul>
                    <div class="see-project">
                        <button id="modal-btn" onclick="openModal(projects[${index}])">See project</button>
                    </div>
                </div>
      `;
  });
};

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
/* eslint-disable */
function openModal() {
  const gridContainer = document.getElementById('myModal');
  gridContainer.style.display = 'block';
}

// When the user clicks on <span> (x), close the modal

function closeModal() {
  const modal = document.getElementById('myModal');
  modal.style.display = 'none';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  const modal = document.getElementById('myModal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};
/* eslint-enable */
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