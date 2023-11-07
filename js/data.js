const images = [
  {
    image: 'img/01.webp',
    title: 'Marvel\'s Spiderman Miles Morale',
    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
  }, {
    image: 'img/02.webp',
    title: 'Ratchet & Clank: Rift Apart',
    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
  }, {
    image: 'img/03.webp',
    title: 'Fortnite',
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  }, {
    image: 'img/04.webp',
    title: 'Stray',
    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
  }, {
    image: 'img/05.webp',
    title: "Marvel's Avengers",
    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
  }
];

// stampa in pagina 
const itemsElem = document.querySelector(".items");
 
for (let i = 0; i < images.length; i++) {
  const imgCarusel = images[i];

    if (i === 0) {

      itemsElem.innerHTML += `<div class="item active">
                               <img src="${imgCarusel.image}" alt="">
                               <h3>${imgCarusel.title}</h3>
                               <p>${imgCarusel.text}</p>
                         </div>`   
    } else {

      itemsElem.innerHTML += `<div class="item">
                              <img src="${imgCarusel.image}" alt="">
                              <h3>${imgCarusel.title}</h3>
                              <p>${imgCarusel.text}</p>
                          </div>`   
    }
}


// variabile globale
let imageActive = 0;


document.querySelector('.next').addEventListener('click', function () {
  console.log('next');

  imageActive++;

  if (imageActive > images.length - 1) {
    imageActive = 0;
  }

// 
  // PROCEDIMENTO PER INCREMENTO IMMAGINI

  document.querySelector('.active').classList.remove('active');

  document.querySelectorAll('.item')[imageActive].classList.add('active');

});

document.querySelector('.prev').addEventListener('click', function () {
  console.log('prev');

  imageActive--;

  if (imageActive < 0) {
    imageActive = images.length - 1;
  }

    document.querySelector(`.active`).classList.remove(`active`);

    document.querySelectorAll(`.item`)[imageActive].classList.add(`active`);

});


