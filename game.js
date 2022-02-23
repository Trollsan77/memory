const section = document.querySelector('section');

//Skapar korten
  const getData = () => [
      { imgSrc: "./img/beatles.jpeg", name: "beatles" },
      { imgSrc: "./img/blink182.jpeg", name: "blink 182" },
      { imgSrc: "./img/fkatwigs.jpeg", name: "fka twigs" },
      { imgSrc: "./img/fleetwood.jpeg", name: "fleetwood" },
      { imgSrc: "./img/joy-division.jpeg", name: "joy division" },
      { imgSrc: "./img/ledzep.jpeg", name: "lep zeppelin" },
      { imgSrc: "./img/metallica.jpeg", name: "metallica" },
      { imgSrc: "./img/pinkfloyd.jpeg", name: "pink floyd" },
      { imgSrc: "./img/beatles.jpeg", name: "beatles" },
      { imgSrc: "./img/blink182.jpeg", name: "blink 182" },
      { imgSrc: "./img/fkatwigs.jpeg", name: "fka twigs" },
      { imgSrc: "./img/fleetwood.jpeg", name: "fleetwood" },
      { imgSrc: "./img/joy-division.jpeg", name: "joy division" },
      { imgSrc: "./img/ledzep.jpeg", name: "lep zeppelin" },
      { imgSrc: "./img/metallica.jpeg", name: "metallica" },
      { imgSrc: "./img/pinkfloyd.jpeg", name: "pink floyd" },
    ];
  
// Randomize
    const randomize = () => {
        const cardData = getData();
        cardData.sort(() => Math.random() - 0.5);
        return cardData;
    
    };
 // Generera kort
    const cardGenerator = () => {
    const cardData = randomize();
 
 
 //Skapar element
 let cards = document.querySelectorAll('.card');
 cardData.forEach(item => {
     let card = document.createElement('div');
     let face = document.createElement('img');
     let back = document.createElement('div');
     card.classList = 'card';
     face.classList = 'face';
     back.classList = 'back';
     //Koppla bilderna till korten
     face.src = item.imgSrc;
     card.setAttribute('name', item.name);
     //Koppla korten till sectionen
     section.appendChild(card);
     card.appendChild(face);
     card.appendChild(back);

     card.addEventListener('click', (e) => {
         card.classList.toggle('toggleCard');
         checkCards(e);
     })
    });
};


//Kontrollerar korten
let checkCards = (e) => {
    let clickedCard = e.target;
    clickedCard.classList.add("flipped");
    let flippedCards = document.querySelectorAll('.flipped');
    let toggleCard = document.querySelectorAll('.toggleCard');
    if(flippedCards.length === 2) {
        if(flippedCards[0].getAttribute("name") === flippedCards[1].getAttribute("name")) {
        console.log("rätt");
        flippedCards.forEach((card) => {
            card.classList.remove("flipped");
            card.style.pointerEvents = "none";
        });
    } else {
        console.log("fel");
        flippedCards.forEach((card )=> {
            card.classList.remove("flipped");
            setTimeout(() => card.classList.remove("toggleCard"), 1000);
        });
        }
}
};
//restart
const restart = (text) => {
let cardData = randomize();
let faces = document.querySelectorAll('.face');
let cards = document.querySelectorAll('.card');
section.style.pointerEvents = 'none';

setTimeout(() => {
cardData.forEach((item, index) => {
    cards[index].classList.remove('toggleCard');
    cards[index].style.pointerEvents = 'all';
    faces[index].src = item.imgSrc;
    cards[index].setAttribute('name', item.name);
    section.style.pointerEvents = 'all';
}, 1000)
});

};
cardGenerator();
  
 
 