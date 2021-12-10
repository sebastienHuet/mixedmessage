//List of names
const name = [
  "Seb",
  "Julie",
  "Adam",
  "Jolie Coeur",
  "Darkel",
  "Evangely",
  "Jah",
  "Limbo",
  "Azela",
  "Kimber",
];

// List of quotes
const quoteList = [
  "Love For All, Hatred For None.",
  "Change the world by being yourself.",
  "Every moment is a fresh beginning.",
  "Never regret anything that made you smile. ",
  "Die with memories, not dreams.",
  "Aspire to inspire before we expire.",
  "Everything you can imagine is real.",
  "Simplicity is the ultimate sophistication.",
  "Whatever you do, do it well.",
  "What we think, we become",
];

//Get list of joke
const jokes = require("give-me-a-joke");

//Function to get random name
function randomName() {
  let randomNamePosition = Math.floor(Math.random() * name.length);
  return name[randomNamePosition];
}

//Function to get random quote
function randomQuote() {
  //Randomly select position for list
  let randomQuotePosition = Math.floor(Math.random() * quoteList.length);
  return quoteList[randomQuotePosition];
}

jokes.getRandomDadJoke(function (joke) {
  console.log(
    `${randomName()} can make stupid joke such as: '${joke}', but in the same time he can be quite inspirationnal when he says stuff such as : '${randomQuote()}' `
  );
});

//const Quote = require('inspirational-quotes');
//console.log(Quote.getQuote({ author: false }));
