/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
//Create an array named quotes.
/*
** Add the following properties to each quote object:
** quote - string - the actual quote
** source - string - the person or character who said it
*/
const quotes = [
  {
    quote: "Experience is the name everyone gives to their mistakes.",
    source: "Oscar Wilde"
  },
  {
    quote: "I wonder if the world is tired of being greeted by me...",
    source: "Sharina V. Jones",
    tag: "humor"

  },
  {
    quote: "Optimism is an occupational hazard of programming: feedback is the treatment",
    source: "Kent Beck"
  },
  /*Add a citation property to at least one quote object. 
  ** The value should be a string holding a reference to the source of the quote, like the book, movie, or song where the quote originates.

* Add a year property to at least one quote object.
** The value should be a string or number representing the year the quote originated.
*/
  {
    quote: "I have learned not to allow rejection to move me.",
    source: "Cicely Tyson",
    citation: "ELLE",
    year: 2007,
    tag: "inspirational"
  },
  {
    quote: "It took me quite a long time to develop a voice, and now that I have it, I am not going to be silent.",
    source: "Madeleine Albright",
    year: 2010,
    tag: "politics"
  },
  {
    quote: "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
    source: "Patrick McKenzie",
    citation: "Twitter",
    year: 2016
  }
];

/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  //create a random number
  let random = Math.floor(Math.random() * quotes.length);
  //use the number to return a random quote
  return quotes[random];
}

/***
 * `printQuote` function
***/
function printQuote() {
  let quote = getRandomQuote();
  let html = `<p class ="quote">${quote.quote}</p>
  <p class="source">${quote.source}`;

  //check for citation
  if (quote.citation) {
    html += `<span class="citation">${quote.citation}</span>`;
  }

  //check for year
  if (quote.year) {
    html += `<span class="year">${quote.year}</span>`;
  }

  //check for tag
  if(quote.tag) {
    html += `<span class="tag">${quote.tag}</span>`
  }

  html += `</p>`;
  document.getElementById('quote-box').innerHTML = html; 
  changeBgColor();

}

/***
 * `` changeBgColor function
***/
function changeBgColor() {
  const body = document.querySelector('body');
  //generate random colors
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}


/***
 * Create a timing function with the setInterval() method to print a new quote to the page at regular intervals, like every 10 to 20 seconds
 */
setInterval(printQuote, 10000);
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);