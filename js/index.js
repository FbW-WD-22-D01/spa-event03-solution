const section = document.querySelector('section');
const closeButton = document.querySelector('section div span');

document.body.addEventListener('mousemove', function showDiv(e) {
  if (e.clientY < 10) {
    section.classList.add('showOff');
    e.currentTarget.removeEventListener('mousemove', showDiv);
  }
});

closeButton.addEventListener('click', function(e) {
  section.classList.remove('showOff');
});
