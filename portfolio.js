const navigation = document.querySelector('.hidden');
const close = document.querySelector('#close');
const option = document.querySelector('#option');
const cont = document.querySelector('#cont');
const about = document.querySelector('#about');
const port = document.querySelector('#port');

option.addEventListener('click', () => {
  navigation.style.display = 'flex';
});

close.addEventListener('click', () => {
  navigation.style.display = 'none';
});
cont.addEventListener('click', () => {
  navigation.style.display = 'none';
});
about.addEventListener('click', () => {
  navigation.style.display = 'none';
});
port.addEventListener('click', () => {
  navigation.style.display = 'none';
});