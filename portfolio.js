const navigation = document.querySelector('.hidden');
const close = document.querySelector('#close');
const option = document.querySelector('#option');
const cont = document.querySelector('#cont');
const about = document.querySelector('#about');
const port = document.querySelector('#port');
const action = document.querySelectorAll('.action');
const an1 = document.querySelector('.an1');
const an2 = document.querySelector('.an2');
const an3 = document.querySelector('.an3');
const an4 = document.querySelector('.an4');
const an5 = document.querySelector('.an5');
const an6 = document.querySelector('.an6');
let rb= document.querySelectorAll('.cardwork-one-rb');
let rb1= document.querySelector('.rb1');
let rb5= document.querySelector('.rb5');
let rb4= document.querySelector('.rb4');
let rb3= document.querySelector('.rb3');
let rb2= document.querySelector('.rb2');
let rb6= document.querySelector('.rb6');


const cardcollection1 = [
    card1= {

    },
    
    card2: document.querySelector('.card2'),
    card3: document.querySelector('.card3'),
]






















rb1.addEventListener('mouseenter',() => {
    an1.style.display = 'block';
    rb1.style.display = 'none';
} );
rb1.addEventListener('mouseleave',() => {
    an1.style.display = 'none';
    rb1.style.display = 'flex';
} );
rb2.addEventListener('mouseenter',() => {
    an2.style.display = 'block';
    rb2.style.display = 'none';
} );
rb2.addEventListener('mouseleave',() => {
    an2.style.display = 'none';
    rb2.style.display = 'flex';
} );
rb3.addEventListener('mouseenter',() => {
    an3.style.display = 'block';
    rb3.style.display = 'none';
} );
rb3.addEventListener('mouseleave',() => {
    an3.style.display = 'none';
    rb3.style.display = 'flex';
} );
rb4.addEventListener('mouseenter',() => {
    an4.style.display = 'block';
    rb4.style.display = 'none';
} );
rb4.addEventListener('mouseleave',() => {
    an4.style.display = 'none';
    rb4.style.display = 'flex';
} );
rb5.addEventListener('mouseenter',() => {
    an5.style.display = 'block';
    rb5.style.display = 'none';
} );
rb5.addEventListener('mouseleave',() => {
    an5.style.display = 'none';
    rb5.style.display = 'flex';
} );
rb6.addEventListener('mouseenter',() => {
    an6.style.display = 'block';
    rb6.style.display = 'none';
} );
rb6.addEventListener('mouseleave',() => {
    an6.style.display = 'none';
    rb6.style.display = 'flex';
} );
       
    
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



