const menuIcon = document.querySelector('#menu-icon');
const navLink = document.querySelector('.nav-links');

menuIcon.onclick = () => {
  navLink.classList.toggle('active'); // Removed the dot ✅
};
