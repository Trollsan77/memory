const section = document.querySelector('section');
const playerLiverscount = document.querySelector('span');
const playerLives = 6;

//Länkar texten
playerLiverscount.textContent = playerLives;

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
      { imgSrc: "./img/ledzep.jpeg", name: "led zeppelin" },
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
    let flippedCards = document.querySelectorAll('.flipped')
    if(flippedCards.length === 2) {
        if(flippedCards[0].getAttribute("name") === flippedCards[1].getAttribute("name")) 
    {
        console.log("match")
      
    } else {
        console.log("wrong")
    }
}

};
cardGenerator();
  
 
 