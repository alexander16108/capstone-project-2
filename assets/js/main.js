// ################
// CREATING A JAVASCRIPT CODE FOR 
// THE HAMBURGER TOGGLE BUTTON 
// ###############

// popup-menu mobile version
const headList = document.querySelector('.toggle-list');
const openMenu = document.querySelector('.toggle-open');
const closeBtn = document.querySelector('.toggle-close');

openMenu.addEventListener('click', () => {
  headList.classList.add('show');
});
closeBtn.addEventListener('click', () => {
  headList.classList.remove('show');
});
