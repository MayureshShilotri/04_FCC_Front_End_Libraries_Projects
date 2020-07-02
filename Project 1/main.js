// DOM is ready
document.addEventListener("DOMContentLoaded", function() {
  getNewQuote();
});

  // DATA
  const quotesPool = [
    ["Less is More", "Ludwig Mies Van Der Rohe"],
    ["God is in the Details", "Ludwig Mies Van Der Rohe"],
    ["Architecture starts when you carefully put two bricks together. There it begins", "Ludwig Mies Van Der Rohe"],
    ["Good building come from good people and all problems are solved by good design", "Stephen Gardiner"],
    ["There are 360 degrees, so why stick to one?", "Zaha Hadid"],
    ["Form ever follows function", "Louis Sullivan"],
    ["Recognizing the need is the primary condition of design", "Charles Eames"],
    ["Architecture is the learned game, correct and magnificent, of forms assembled in the light", "Le Corbusier"],
    ["An idea is salvation by imagination", "Frank Lloyd Wright"],
    ["When I'm working on a problem, I never think about beauty. But when I've finished, if the solution is not beautiful I know it's wrong", "Buckminster Fuller"],
    ["As an architect you design for the present, with an awareness of the past, for a future which is essentially unknown", "Norman Foster"],
    ["To provide meaningful architecture is not to parody history but to articulate it", "Daniel Libeskind"],
    ["To create, one must first question everything", "Eileen Gray"],
    ["One of the great beauties of architecture is that each time, it is like life starting all over again", "Renzo Piano"],
    ["You’ve got to bumble forward into the unknown", "Frank Gehry"]
  ];

  // onClick event binding
  function getNewQuote() {
    var randomQuoteButton = document.querySelector("#new-quote");
    var quote = document.getElementById("text");
    var author = document.getElementById("author");
    var randomIndex = Math.floor((Math.random() * quotesPool.length) + 1);
    quote.innerHTML = quotesPool[randomIndex][0];
    author.innerHTML = quotesPool[randomIndex][1];
    let tweet = document.getElementById("tweet-quote");
    tweet.href = 'https://twitter.com/intent/tweet?text="' + quotesPool[randomIndex][0] + '" -' + quotesPool[randomIndex][1];
  }

  // Get 1ST quote
  getNewQuote();
