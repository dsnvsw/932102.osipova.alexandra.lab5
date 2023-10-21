
const blocks = document.querySelectorAll('.Block');
const popups = document.querySelectorAll('.Text');
blocks.forEach((block, index) => {
  const button = block.querySelector('.b');
  const popup = popups[index];
  button.addEventListener('click', () => {
    popup.classList.add('active');
  });
});
popups.forEach(popup => {
  popup.addEventListener('click', () => {
    popup.classList.remove('active');
  });
});