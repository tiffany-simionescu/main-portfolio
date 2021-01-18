const imgBx = document.querySelectorAll('.resume-imgBx');
imgBx.forEach(popup => popup.addEventListener('click', () => {
  popup.classList.toggle('active')
}))