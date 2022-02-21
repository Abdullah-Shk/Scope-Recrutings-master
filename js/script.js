const mobileBtn = document.getElementById("mobile-cta");
const  nav = document.getElementById('mobile_nav');
const mobileBtnExit = document.getElementById('close');
  
mobileBtn.addEventListener('click', () => {
      nav.classList.add('show');
  })
mobileBtnExit.addEventListener('click', () => {
      nav.classList.remove('show');
})