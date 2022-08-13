const menu = document.querySelector('.header__menu');
const menuBtn = document.querySelector('.menu__button');
const menuBtnImg = document.querySelector('.menu__button-image');

menuBtn.onclick = () => {
  if(menu.classList.toggle('open')) {
    menuBtnImg.src = "./img/icons/nav-close.svg"
  }
  else {
    menuBtnImg.src = "./img/icons/nav-open.svg"
  }
}

AOS.init({
  once: true
});