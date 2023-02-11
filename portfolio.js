const navigation = document.querySelector('.hidden');
const close = document.querySelector('#close');
const option = document.querySelector('#option');
const cont = document.querySelector('#cont');
const about = document.querySelector('#about');
const port = document.querySelector('#port');

const mobileCardCollections = {

  mobile: {
    title: 'Professional Art  Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the  industry's standard",
    technologies: ['html', 'bootstrap', 'ruby'],
    seeproject: 'See Project',
    seelive: 'See live',
    source: 'See source',
    images: ['./images/cardfour.png', './images/Iconopen.png', './images/git.png'],

  },

};
const desktopCardCollections = {
  desktop: {
    title: 'Multi-Post Stories',
    description2: "A daily selection of privately personalized  reads; no accounts or sign-ups required.  has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a standard dummy text.",
    images: ['./images/yoga2.png', './images/yoga.png'],
    description: "A daily selection of privately personalized  reads; no accounts or sign-ups required. This  has been the industry's standard dummy text ever since the 1500s, when an unknown printertook a standard dummy text.  ",
    technologies: ['css', 'html', 'bootstrap', 'Ruby'],
    seeproject: 'See Project',
    seelive: 'See live',
    source: 'See source',
  },
  cardone4: {
    title: 'Professional Art  Printing Data More',
    images: ['./images/cardfour.png', './images/Iconopen.png', './images/git.png'],
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the  industry's standard",
    technologies: ['html', 'bootstrap', 'ruby'],
    seeproject: 'See Project',
    seelive: 'See live',
    source: 'See source',
  },
  cardtwo5: {

    title: 'Data Dashboard  Healthcare',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the  industry's standard",
    images: ['./images/cardtwo.png', './images/Iconopen.png', './images/git.png'],
    technologies: ['html', 'bootstrap', 'ruby'],
    seeproject: 'See Project',
    seelive: 'See live',
    source: 'See source',
  },
  cardthree6: {

    title: 'Website Portfolio',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the  industry's standard",
    images: ['./images/cardthree.png', './images/Iconopen.png', './images/git.png'],
    technologies: ['html', 'bootstrap', 'ruby'],
    seeproject: 'See Project',
    seelive: 'See live',
    source: 'See source',
  },
};

const cardCollection2 = desktopCardCollections.desktop;

const mobileCards1 = document.getElementById('mobile-card-work1');
mobileCards1.classList.add('featured-image');

mobileCards1.innerHTML = `
    <img src=${cardCollection2.images[1]} alt="a place holder image" class="yoga">
    <img src=${cardCollection2.images[0]} alt="a place holder image" class="yoga2">
    <div class="right-block">
        <h3 class="title-post" tabindex="0">${cardCollection2.title}</h3>
        <p class="supporting-text-rw" tabindex="0">${cardCollection2.description2}
        </p>
        <p class="supporting-text-rw2" tabindex="0"> ${cardCollection2.description}
            </p>
        <ul class="tags"> <li class="css" tabindex="0"><small class="csst">${cardCollection2.technologies[0]}</small></li>
        <li class="html" tabindex="0"><small class="htmlt">${cardCollection2.technologies[1]}</small></li>
         <li class="bootstrap" tabindex="0"><small class="bootstrapt">${cardCollection2.technologies[2]}</small></li>
         <li class="ruby" tabindex="0"><small class="rubyt">${cardCollection2.technologies[3]}</small></li>
         </ul>
         <button type="button" id="dbtn0" class="see-project" tabindex="0">${cardCollection2.seeproject}</button>
         <button type="button" id="mbtn0" class="see-project2" tabindex="0">${cardCollection2.seeproject}</button>
    </div>
`;

const mobileCards2 = document.getElementById('mobile-card-work2');
mobileCards2.classList.add('card-work');

mobileCards2.innerHTML = `
                <section class=" cardworks cardwork-one">
                    <div class="action">
                        <button type="button" id="mbtn1" class="btn">${mobileCardCollections.mobile.seeproject}</button> 
                    </div>
                    <article class="cardwork-one-rb">
                        <p class="cwo-title-post">${mobileCardCollections.mobile.title}</p>
                        <p class="cwo-supporting-text">${mobileCardCollections.mobile.description}</p>
                        <ul class="cwo-tags">
                            <li class="cw-li cw-html"><small class="cw-text">${mobileCardCollections.mobile.technologies[0]}</small></li>
                            <li class="cw-li cw-bootstrap"><small class="cw-text">${mobileCardCollections.mobile.technologies[1]}</small></li>
                            <li class="cw-li cw-ruby"><small class="cw-text">Ruby</${mobileCardCollections.mobile.technologies[2]}></li>
                        </ul>
                    </article>
                    <div class="mask-group"></div>
                </section>
                <section class=" cardworks cardwork-two">
                    <div class="action">
                        <button type="button" id="mbtn2" class="btn">${mobileCardCollections.mobile.seeproject}</button>                       
                    </div>
                    <article class="cardwork-one-rb">
                    <p class="cwo-title-post">${mobileCardCollections.mobile.title}</p>
                    <p class="cwo-supporting-text">${mobileCardCollections.mobile.description}</p>
                    <ul class="cwo-tags">
                        <li class="cw-li cw-html"><small class="cw-text">${mobileCardCollections.mobile.technologies[0]}</small></li>
                        <li class="cw-li cw-bootstrap"><small class="cw-text">${mobileCardCollections.mobile.technologies[1]}</small></li>
                        <li class="cw-li cw-ruby"><small class="cw-text">Ruby</${mobileCardCollections.mobile.technologies[2]}></li>
                    </ul>
                    </article>
                    <div class="mask-group"></div>
                </section>
                <section class=" cardworks cardwork-three">
                    <div class="action">
                        <button type="button" id="mbtn3" class="btn">${mobileCardCollections.mobile.seeproject}</button>                       
                    </div>
                    <article class="cardwork-one-rb">
                    <p class="cwo-title-post">${mobileCardCollections.mobile.title}</p>
                    <p class="cwo-supporting-text">${mobileCardCollections.mobile.description}</p>
                    <ul class="cwo-tags">
                        <li class="cw-li cw-html"><small class="cw-text">${mobileCardCollections.mobile.technologies[0]}</small></li>
                        <li class="cw-li cw-bootstrap"><small class="cw-text">${mobileCardCollections.mobile.technologies[1]}</small></li>
                        <li class="cw-li cw-ruby"><small class="cw-text">Ruby</${mobileCardCollections.mobile.technologies[2]}></li>
                    </ul>
                    </article>
                    <div class="mask-group"></div>
                </section>
                <section class=" cardworks cardwork-four">
                    <div class="action">
                        <button type="button" id="mbtn4" class="btn">${mobileCardCollections.mobile.seeproject}</button>                      
                    </div>
                    <article class="cardwork-one-rb">
                    <p class="cwo-title-post">${mobileCardCollections.mobile.title}</p>
                    <p class="cwo-supporting-text">${mobileCardCollections.mobile.description}</p>
                    <ul class="cwo-tags">
                        <li class="cw-li cw-html"><small class="cw-text">${mobileCardCollections.mobile.technologies[0]}</small></li>
                        <li class="cw-li cw-bootstrap"><small class="cw-text">${mobileCardCollections.mobile.technologies[1]}</small></li>
                        <li class="cw-li cw-ruby"><small class="cw-text">Ruby</${mobileCardCollections.mobile.technologies[2]}></li>
                    </ul>
                    </article>
                    <div class="mask-group"></div>
                </section>
                <section class=" cardworks cardwork-five">
                    <div class="action">
                        <button type="button" id="mbtn5" class="btn">${mobileCardCollections.mobile.seeproject}</button>                       
                    </div>
                    <article class="cardwork-one-rb">
                    <p class="cwo-title-post">${mobileCardCollections.mobile.title}</p>
                    <p class="cwo-supporting-text">${mobileCardCollections.mobile.description}</p>
                    <ul class="cwo-tags">
                        <li class="cw-li cw-html"><small class="cw-text">${mobileCardCollections.mobile.technologies[0]}</small></li>
                        <li class="cw-li cw-bootstrap"><small class="cw-text">${mobileCardCollections.mobile.technologies[1]}</small></li>
                        <li class="cw-li cw-ruby"><small class="cw-text">Ruby</${mobileCardCollections.mobile.technologies[2]}></li>
                    </ul>
                    </article>
                    <div class="mask-group"></div>
                </section>
                <section class=" cardworks cardwork-six">
                    <div class="action">
                        <button type="button" id="mbtn6" class="btn">${mobileCardCollections.mobile.seeproject}</button>                       
                    </div>
                    <article class="cardwork-one-rb">
                    <p class="cwo-title-post">${mobileCardCollections.mobile.title}</p>
                    <p class="cwo-supporting-text">${mobileCardCollections.mobile.description}</p>
                    <ul class="cwo-tags">
                        <li class="cw-li cw-html"><small class="cw-text">${mobileCardCollections.mobile.technologies[0]}</small></li>
                        <li class="cw-li cw-bootstrap"><small class="cw-text">${mobileCardCollections.mobile.technologies[1]}</small></li>
                        <li class="cw-li cw-ruby"><small class="cw-text">Ruby</${mobileCardCollections.mobile.technologies[2]}></li>
                    </ul>
                    </article>
                    <div class="mask-group"></div>
                </section> `;

const desktopCards1 = document.getElementById('desktop-card-work1');
desktopCards1.classList.add('card-collection-one');

desktopCards1.innerHTML = `

    <section class="card-one cardworks" tabindex="0">
    <div tabindex="0" class="mask-group mask-group4"></div>
    <div class="action">
        <button  type="button" id="dbtn1" class="btn" tabindex="0">${desktopCardCollections.cardone4.seeproject}</button> 
    </div>
    <article class="cardwork-one-rb">
        <p class="cwo-title-post" tabindex="0">${desktopCardCollections.cardone4.title}</p>
        <p class="cwo-supporting-text" tabindex="0">${desktopCardCollections.cardone4.description}</p>
        <ul class="cwo-tags">
            <li class="cw-li cw-html" tabindex="0"><small class="cw-text">${desktopCardCollections.cardone4.technologies[0]}</small></li>
            <li class="cw-li cw-bootstrap" tabindex="0"><small class="cw-text">${desktopCardCollections.cardone4.technologies[1]}</small></li>
            <li class="cw-li cw-ruby" tabindex="0"><small class="cw-text">${desktopCardCollections.cardone4.technologies[2]}</small></li>
        </ul>
    </article>
    
</section>
<section class=" cardworks card-two" tabindex="0">
<div tabindex="0" class="mask-group  mask-group2"></div>
    <div class="action">
        <button type="button" id="dbtn2" class="btn" tabindex="0">${desktopCardCollections.cardtwo5.seeproject}</button> 
    </div>
    <article class="cardwork-one-rb">
        <p class="cwo-title-post" tabindex="0">${desktopCardCollections.cardtwo5.title}</p>
        <p class="cwo-supporting-text" tabindex="0">$${desktopCardCollections.cardtwo5.description}</p>
        <ul class="cwo-tags">
            <li class="cw-li cw-html" tabindex="0"><small class="cw-text">${desktopCardCollections.cardtwo5.technologies[0]}</small></li>
            <li class="cw-li cw-bootstrap" tabindex="0"><small class="cw-text">${desktopCardCollections.cardtwo5.technologies[1]}</small></li>
            <li class="cw-li cw-ruby" tabindex="0"><small class="cw-text">${desktopCardCollections.cardtwo5.technologies[2]}</small></li>
        </ul>
    </article>
    </section>

<section class=" cardworks card-three" tabindex="0">
<div tabindex="0" class="mask-group  mask-group3"></div>
    <div class="action">
        <button type="button" id="dbtn3" class="btn" tabindex="0">${desktopCardCollections.cardthree6.seeproject}</button> 
    </div>
    <article class="cardwork-one-rb">
        <p class="cwo-title-post2" tabindex="0">${desktopCardCollections.cardthree6.title}</p>
        <p class="cwo-supporting-text2" tabindex="0">${desktopCardCollections.cardthree6.description}</p>
        <ul class="cwo-tags2">
            <li class="cw-li cw-html" tabindex="0"><small class="cw-text">${desktopCardCollections.cardthree6.technologies[0]}</small></li>
            <li class="cw-li cw-bootstrap" tabindex="0"><small class="cw-text">${desktopCardCollections.cardthree6.technologies[1]}</small></li>
            <li class="cw-li cw-ruby" tabindex="0"><small class="cw-text">${desktopCardCollections.cardthree6.technologies[2]}</small></li>
        </ul>
    </article>
    
</section>

    `;

const desktopCards2 = document.getElementById('desktop-card-work2');
desktopCards2.classList.add('card-collection-two');

desktopCards2.innerHTML = `
    <section class=" cardworks card-four" tabindex="0">
    <div tabindex="0" class="mask-group  mask-group4"></div>
    <div class="action">
        <button type="button" class="btn" id="dbtn4" tabindex="0">${desktopCardCollections.cardone4.seeproject}</button> 
    </div>
    <article class="cardwork-one-rb">
        <p class="cwo-title-post" tabindex="0">${desktopCardCollections.cardone4.title}</p>
        <p class="cwo-supporting-text" tabindex="0">${desktopCardCollections.cardone4.description}</p>
        <ul class="cwo-tags">
            <li class="cw-li cw-html" tabindex="0"><small class="cw-text">${desktopCardCollections.cardone4.technologies[0]}</small></li>
            <li class="cw-li cw-bootstrap" tabindex="0"><small class="cw-text">${desktopCardCollections.cardone4.technologies[1]}</small></li>
            <li class="cw-li cw-ruby" tabindex="0"><small class="cw-text">${desktopCardCollections.cardone4.technologies[2]}</small></li>
        </ul>
    </article>
</section>

<section class=" cardworks card-two" tabindex="0">
<div tabindex="0" class="mask-group  mask-group2"></div>
    <div class="action">
        <button type="button" id="dbtn5" class="btn" tabindex="0">${desktopCardCollections.cardtwo5.seeproject}</button> 
    </div>
    <article class="cardwork-one-rb">
        <p class="cwo-title-post" tabindex="0">${desktopCardCollections.cardtwo5.title}</p>
        <p class="cwo-supporting-text" tabindex="0">${desktopCardCollections.cardtwo5.description}</p>
        <ul class="cwo-tags">
            <li class="cw-li cw-html" tabindex="0"><small class="cw-text">${desktopCardCollections.cardtwo5.technologies[0]}</small></li>
            <li class="cw-li cw-bootstrap" tabindex="0"><small class="cw-text">${desktopCardCollections.cardtwo5.technologies[1]}</small></li>
            <li class="cw-li cw-ruby" tabindex="0"><small class="cw-text">${desktopCardCollections.cardtwo5.technologies[2]}</small></li>
        </ul>
    </article>
    </section>

<section class=" cardworks card-three" tabindex="0">
<div tabindex="0" class="mask-group  mask-group3"></div>
    <div class="action">
        <button type="button" id="dbtn6" class="btn" tabindex="0">${desktopCardCollections.cardthree6.seeproject}</button> 
    </div>
    <article  class="cardwork-one-rb">
        <p class="cwo-title-post2" tabindex="0">${desktopCardCollections.cardthree6.title}</p>
        <p class="cwo-supporting-text2" tabindex="0">${desktopCardCollections.cardthree6.description}</p>
        <ul class="cwo-tags2">
            <li class="cw-li cw-html" tabindex="0"><small class="cw-text">${desktopCardCollections.cardthree6.technologies[0]}</small></li>
            <li class="cw-li cw-bootstrap" tabindex="0"><small class="cw-text">${desktopCardCollections.cardthree6.technologies[1]}</small></li>
            <li class="cw-li cw-ruby" tabindex="0"><small class="cw-text">${desktopCardCollections.cardthree6.technologies[2]}</small></li>
        </ul>
    </article>
    
</section>

    `;

function popupDesktop(btnid) {
  let cardcontainer;
  if (btnid === 'dbtn1' || btnid === 'dbtn4') {
    cardcontainer = desktopCardCollections.cardone4;
  } else if (btnid === 'dbtn2' || btnid === 'dbtn5') {
    cardcontainer = desktopCardCollections.cardtwo5;
  } else if (btnid === 'dbtn3' || btnid === 'dbtn6') {
    cardcontainer = desktopCardCollections.cardthree6;
  } else if (btnid === 'dbtn0' || btnid === 'mbtn0') {
    cardcontainer = desktopCardCollections.desktop;
  } else if (btnid === 'mbtn1' || btnid === 'mbtn2' || btnid === 'mbtn3' || btnid === 'mbtn4' || btnid === 'mbtn5' || btnid === 'mbtn6') {
    cardcontainer = mobileCardCollections.mobile;
  }

  let liTags = '';
  for (let card = 0; card < cardcontainer.technologies.length; card += 1) {
    liTags += `<li>${cardcontainer.technologies[card]}</li>`;
  }
  const deskPopUp = document.getElementById('contentjs4');
  deskPopUp.classList.add('contentjs2');
  deskPopUp.innerHTML = `
    <header class="multipost-detail">
    <h3>${cardcontainer.title}</h3>
    <h3  class="keepingtrack">
    ${cardcontainer.title}
    </h3>
    <ion-icon id="closepopup" class ="ionicon"  name="close-outline"></ion-icon>
   </header>
   <article class="contentjs">
    <ul id="leftul" class="cwo-tags"> ${
  liTags}
    </ul>
    <img id="popimg" src=${cardcontainer.images[0]} alt="a placeholder image" />
    <p id="poppg">
    ${cardcontainer.description}
    </p>
    <p class="dummytxt">${cardcontainer.description}
    </p>
   
    <a class="seelive" href=" https://fuadmoin.github.io/Portfolio/" target="_blank">
    ${cardcontainer.seelive} 
      <img src=${desktopCardCollections.cardone4.images[1]}  class="iconpen" alt="a link to the live demo of this website" />
    </a>
    <a class="seesource" href="https://github.com/fuadmoin" target="_blank">
    ${cardcontainer.source} 
      <img src=${desktopCardCollections.cardone4.images[2]}  class="iconpen" alt="a link to github page" />
    </a>
   </article>
    `;

  deskPopUp.style.display = 'block';
  const blurBackground = document.getElementById('blurBackground');
  blurBackground.style.filter = 'blur(0px)';
  const popimg = document.getElementById('popimg');
  const poppg = document.getElementById('poppg');
  const leftul = document.getElementById('leftul');
  leftul.style.left = '0px';

  if (btnid === 'dbtn1' || btnid === 'dbtn2' || btnid === 'dbtn3') {
    deskPopUp.style.top = '1600px';
    blurBackground.style.filter = 'blur(10px)';
  }

  if (btnid === 'mbtn1' || btnid === 'mbtn2' || btnid === 'mbtn3' || btnid === 'mbtn4' || btnid === 'mbtn5' || btnid === 'mbtn6') {
    blurBackground.style.filter = 'blur(10px)';
    leftul.style.left = '-30px';
    leftul.style.top = '-45px';
    popimg.style.top = '-35px';
    poppg.style.top = '-6px';
  }
  if (btnid === 'mbtn1') { deskPopUp.style.top = '1600px'; }
  if (btnid === 'mbtn0') {
    deskPopUp.style.top = '900px';
    blurBackground.style.filter = 'blur(10px)';
  }
  if (btnid === 'mbtn2') { deskPopUp.style.top = '1900px'; }
  if (btnid === 'mbtn3') { deskPopUp.style.top = '2400px'; }
  if (btnid === 'mbtn4') { deskPopUp.style.top = '2900px'; }
  if (btnid === 'mbtn5') { deskPopUp.style.top = '3300px'; }
  if (btnid === 'mbtn6') { deskPopUp.style.top = '3800px'; }
  if (btnid === 'dbtn4' || btnid === 'dbtn5' || btnid === 'dbtn6') {
    deskPopUp.style.top = '2100px';
    blurBackground.style.filter = 'blur(10px)';
  }
  if (btnid === 'dbtn0') {
    deskPopUp.style.top = '1100px';
    leftul.style.left = '0px';
    blurBackground.style.filter = 'blur(10px)';
  }
  const closepopup = document.getElementById('closepopup');
  closepopup.addEventListener('click', () => {
    deskPopUp.style.display = 'none';
    blurBackground.style.filter = 'blur(0px)';
    deskPopUp.style.top = '1000px';
  });
}

// form validation function
const form = document.getElementById('formspree');
// error here
const errorvalid = document.getElementById('errorvalid');
const email2 = document.getElementById('email');
let emailAddress;
function hasUppercaseLetter(str) { return str.toUpperCase() !== str; }
// error here
form.addEventListener('submit', (event) => {
  errorvalid.style.visibility = 'hidden';
  emailAddress = email2.value;

  if (hasUppercaseLetter(emailAddress) === true) {
    event.preventDefault();
    //line error here

  }
});

const mbtn0 = document.getElementById('mbtn0');
mbtn0.addEventListener('click', () => {
  popupDesktop('mbtn0');
});

const mbtn1 = document.getElementById('mbtn1');
mbtn1.addEventListener('click', () => {
  popupDesktop('mbtn1');
});
const mbtn2 = document.getElementById('mbtn2');
mbtn2.addEventListener('click', () => {
  popupDesktop('mbtn2');
});
const mbtn3 = document.getElementById('mbtn3');
mbtn3.addEventListener('click', () => {
  popupDesktop('mbtn3');
});
const mbtn4 = document.getElementById('mbtn4');
mbtn4.addEventListener('click', () => {
  popupDesktop('mbtn4');
});
const mbtn5 = document.getElementById('mbtn5');
mbtn5.addEventListener('click', () => {
  popupDesktop('mbtn5');
});
const mbtn6 = document.getElementById('mbtn6');
mbtn6.addEventListener('click', () => {
  popupDesktop('mbtn6');
});

const dbtn0 = document.getElementById('dbtn0');
dbtn0.addEventListener('click', () => {
  popupDesktop('dbtn0');
});
const dbtn4 = document.getElementById('dbtn4');
dbtn4.addEventListener('click', () => {
  popupDesktop('dbtn4');
});
const dbtn5 = document.getElementById('dbtn5');
dbtn5.addEventListener('click', () => {
  popupDesktop('dbtn5');
});
const dbtn6 = document.getElementById('dbtn6');
dbtn6.addEventListener('click', () => {
  popupDesktop('dbtn6');
});
const dbtn1 = document.getElementById('dbtn1');
dbtn1.addEventListener('click', () => {
  popupDesktop('dbtn1');
});
const dbtn2 = document.getElementById('dbtn2');
dbtn2.addEventListener('click', () => {
  popupDesktop('dbtn2');
});
const dbtn3 = document.getElementById('dbtn3');
dbtn3.addEventListener('click', () => {
  popupDesktop('dbtn3');
});

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
